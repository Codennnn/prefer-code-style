import splitbee from '@splitbee/web'
import Link from 'next/link'

import { iconGitHub } from './icons'

export default function GitHubButton() {
  const handleClick = () => {
    splitbee.track('Click GitHub Source Code')
  }

  return (
    <Link passHref href="https://github.com/Codennnn/Green-Wall">
      <a
        className="ml-auto"
        rel="noreferrer"
        target="_blank"
        onAuxClick={handleClick}
        onClick={handleClick}
      >
        <button className="flex items-center rounded-md bg-main-100 px-3 py-2 text-sm font-medium text-main-500 ring-4 ring-white transition-colors duration-300 hover:bg-main-200 md:ring-8">
          {iconGitHub}
          <span className="ml-2">Source Code</span>
        </button>
      </a>
    </Link>
  )
}
