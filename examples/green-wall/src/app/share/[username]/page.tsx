import type { Metadata } from 'next'

import { DataProvider } from '~/DataContext'

import { SharePage } from './SharePage'

type GenerateMetadata = (props: { params: Promise<{ username: string }> }) => Promise<Metadata>

export const generateMetadata: GenerateMetadata = async ({ params }) => {
  const { username } = await params
  const sharingTitle = `${username}'s GitHub contributions`
  const sharingDescription = `I just made a GitHub contributions graph in review!`
  const sharingURL = `https://green-wall.leoku.dev/share/${username}`
  const image = `https://green-wall.leoku.dev/api/og/share/${username}`

  return {
    title: `${username}'s GitHub contributions in review · Green Wall`,
    openGraph: {
      title: sharingTitle,
      description: sharingDescription,
      url: sharingURL,
      images: image,
    },
    twitter: {
      title: sharingTitle,
      description: sharingDescription,
      card: 'summary_large_image',
      images: image,
    },
  }
}

export default function Page() {
  return (
    <DataProvider key="share">
      <SharePage />
    </DataProvider>
  )
}
