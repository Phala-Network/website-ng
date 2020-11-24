import { useRouter } from 'next/router'
import React from 'react'

export type I18nProps = {
  en?: string[] | string
  zh?: string[] | string
  render?: Function
}

const I18n: React.FC<I18nProps> = (props) => {
  const { locale } = useRouter()
  const { render } = props
  let text = props[locale]

  if (Array.isArray(text)) {
    if (render) {
      text = text.map((item) => {
        return render(item)
      })
    } else {
      text = text.join(' ')
    }
  }

  return <>{text}</>
}

export default I18n
