import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { I18nProps } from '../I18n'

type Props = I18nProps

const PageTitle: React.FC<Props> = (props) => {
  const { locale } = useRouter()

  return (
    <Head>
      <title>
        {props[locale]}
        {` | Phala Network`}
      </title>
    </Head>
  )
}

export default PageTitle
