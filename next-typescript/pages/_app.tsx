// import App, { AppProps, AppContext } from 'next/app'

import { Global } from '@emotion/react'
import { globalStyles } from 'globalStyles'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'normalize.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// CustomApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default CustomApp
