import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  en?: string
  zh?: string
  name?: string
}

const I18n: React.FC<Props> = (props) => {
  const { zh = '', en = '' } = props
  const { locale } = useRouter()

  return <>{locale === 'en' ? en : zh}</>
}

export default I18n
