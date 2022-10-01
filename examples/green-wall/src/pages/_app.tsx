import '../styles/reset.css'
import '../styles/globals.css'

import splitbee from '@splitbee/web'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    splitbee.init()
  }, [])

  return getLayout(<Component {...pageProps} />)
}
