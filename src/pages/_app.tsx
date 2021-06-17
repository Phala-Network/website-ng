import '../styles/fonts.scss'
import '../styles/globals.scss'
import '../styles/hljs.scss'
import '../styles/latoFonts.scss'
import '../styles/layout.scss'
import { Helmet } from 'react-helmet'
import { useLocale } from '../hooks/useLocale'
import React from 'react'

function MyApp ({ children }: { children: React.ReactNode }) {
  const locale = useLocale()

  React.useEffect(() => {
    document.querySelector('html')?.setAttribute('lang', locale)
  }, [locale])

  return (
    <div>
      <Helmet>
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
      </Helmet>
      {children}
    </div>
  )
}

export default MyApp
