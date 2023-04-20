import '../styles/fonts.scss'
import '../styles/globals.scss'
import '../styles/hljs.scss'
import '../styles/latoFonts.scss'
import '../styles/layout.scss'
import { Helmet } from 'react-helmet'
import { useLocale } from '../hooks/useLocale'
import React from 'react'

const localInfo = {
  zh: {
    description: '去中心化、安全和可迅速扩展的计算网络'
  },
  en: {
    description:
      'Phala Network is a decentralized cloud that offers secure and scalable computing'
  }
} as const

function MyApp ({ children }: { children: React.ReactNode }) {
  const lang = (useLocale() as 'zh' | 'en') || 'en'
  const { description } = localInfo[lang]

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang
        }}>
        <title>Phala Network</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="bookmark" href="/favicon.ico" type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={description} />
        <meta name="renderer" content="webkit" />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="og:title" content="Phala Network" />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
      </Helmet>
      {children}
    </div>
  )
}

export default MyApp
