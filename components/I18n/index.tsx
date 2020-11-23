import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  en?: string
  zh?: string
  name?: string
}

const I18n: React.FC<Props> = (props) => {
  const { locale } = useRouter()
  let text = props[locale]

  if (Array.isArray(text)) {
    text = text.join(' ')
  }

  return <>{text}</>
}

export default I18n
