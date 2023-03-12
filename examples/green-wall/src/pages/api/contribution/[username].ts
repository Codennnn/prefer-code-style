import type { NextApiRequest, NextApiResponse } from 'next'

import {
  type ContributionBasic,
  type ContributionCalendar,
  type ContributionYear,
  ErrorType,
  type GitHubApiJson,
  type GitHubContributionCalendar,
  type GitHubUser,
  type GraphData,
  type ResponseData,
} from '~/types'

const GAT = process.env.GITHUB_ACCESS_TOKEN

async function fetchGitHubUser(username: string): Promise<ContributionBasic | never> {
  if (!GAT) {
    throw new Error('Require GITHUB ACCESS TOKEN.')
  }

  const res = await fetch('https://api.github.com/graphql', {
    method: 'post',
    body: JSON.stringify({
      query: `
        {
          user(login: "${username}") {
            name
            login
            avatarUrl
            contributionsCollection {
              years: contributionYears
            }
          }
        }
      `,
    }),
    headers: {
      Authorization: `Bearer ${GAT}`,
      'content-type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`fetch error: ${res.statusText}.`)
  }

  const json: GitHubApiJson<{ user: GitHubUser | null }> = await res.json()

  if (!json.data?.user) {
    if (json.errors) {
      const error = json.errors.at(0)
      if (error) {
        throw new Error(error.message)
      }
    }
    throw new Error(json.message)
  }

  const { contributionsCollection, ...rest } = json.data.user

  return { contributionYears: contributionsCollection.years, ...rest }
}

async function fetchContributionsCollection(
  username: string,
  year: ContributionYear
): Promise<ContributionCalendar> {
  if (!GAT) {
    throw new Error('Require GITHUB ACCESS TOKEN.')
  }

  const res = await fetch('https://api.github.com/graphql', {
    method: 'post',
    body: JSON.stringify({
      query: `
        {
          user(login: "${username}") {
            contributionsCollection(from: "${new Date(
              `${year}-01-01`
            ).toISOString()}", to: "${new Date(`${year}-12-31`).toISOString()}") {
              contributionCalendar {
                total: totalContributions
                weeks {
                  days: contributionDays {
                    level: contributionLevel
                    weekday
                  }
                }
              }
            }
          }
        }
      `,
    }),
    headers: {
      Authorization: `Bearer ${GAT}`,
      'content-type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`fetch error: ${res.statusText}.`)
  }

  const json: GitHubApiJson<{ user: GitHubContributionCalendar | null }> = await res.json()

  if (!json.data?.user) {
    throw new Error(json.message)
  }

  const contributionCalendar = json.data.user.contributionsCollection.contributionCalendar

  return { ...contributionCalendar, year }
}

export default async function (req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { username } = req.query

  if (typeof username === 'string') {
    try {
      const githubUser = await fetchGitHubUser(username)

      const contributionCalendars = await Promise.all(
        githubUser.contributionYears.map((year) => fetchContributionsCollection(username, year))
      )

      const data: GraphData = { ...githubUser, contributionCalendars }

      return res.status(200).json({ data })
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const errorData: ResponseData = { errorType: ErrorType.BadRequest, message: e.message }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (e.message === 'Bad credentials') {
        return res.status(401).json({ ...errorData, errorType: ErrorType.BadCredentials })
      }
      return res.status(400).json(errorData)
    }
  }
}
