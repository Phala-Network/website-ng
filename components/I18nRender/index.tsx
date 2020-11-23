import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  en: any
  zh: any
}

const I18nRender: React.FC<Props> = (props) => {
  const { locale } = useRouter()
  const { en, zh } = props

  if (locale === 'en') {
    return en
  } else {
    return zh
  }
}

export default I18nRender
