import { GithubOne } from '@icon-park/react'

function AppFooter() {
  return (
    <div className="flex w-full items-center text-gray-500">
      <div className="">React Admin Template</div>
      <a
        className="ml-auto flex items-center"
        href="https://github.com/Codennnn/portal"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Github
        <GithubOne className="ml-2" fill="#a0aec0" size="24" theme="outline" />
      </a>
    </div>
  )
}

export default AppFooter
