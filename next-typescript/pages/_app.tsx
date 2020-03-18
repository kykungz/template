import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'

import 'normalize.css'
import 'global.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default CustomApp
