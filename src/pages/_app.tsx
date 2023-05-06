import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'
import Main from '../layouts/Main'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <ChakraProvider>
        <Main>{getLayout(<Component {...pageProps} />)}</Main>
      </ChakraProvider>
    </>
  )
}
