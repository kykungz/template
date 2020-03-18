import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from 'GlobalStyle'

import 'normalize.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default CustomApp
