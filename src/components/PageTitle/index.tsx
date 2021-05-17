import { I18nProps } from '../I18n'
import { useLocale } from '../../hooks/useLocale'
import Head from 'react-helmet'
import React from 'react'

type Props = I18nProps

const PageTitle: React.FC<Props> = (props) => {
  const locale = useLocale()

  return (
    <Head>
      <title>
        {props[locale]}
        {' | Phala Network'}
      </title>
    </Head>
  )
}

export default PageTitle
