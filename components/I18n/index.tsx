import { useRouter } from 'next/router'
import React from 'react'

export type I18nProps = {
  en?: string
  zh?: string
}

const I18n: React.FC<I18nProps> = (props) => {
  const { locale } = useRouter()
  let text = props[locale]

  if (Array.isArray(text)) {
    text = text.join(' ')
  }

  return <>{text}</>
}

export default I18n
