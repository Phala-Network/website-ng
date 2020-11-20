import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  en?: string
  zh?: string
  name?: string
}

const I18n: React.FC<Props> = (props) => {
  const { locale } = useRouter()

  return <>{props[locale]}</>
}

export default I18n
