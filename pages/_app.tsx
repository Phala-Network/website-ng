import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/latoFonts.scss'
import '../styles/globals.scss'
import '../styles/layout.scss'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NODE_ENV)

  return (
    <div>
      <Head>
        <title>Phala Network</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='bookmark' href='/favicon.ico' type='image/x-icon' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='description' content='Phala Network' />
        <meta name='renderer' content='webkit' />
        <meta name='format-detection' content='telephone=no'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
