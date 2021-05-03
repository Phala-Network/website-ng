import { useRouter } from 'next/router'
import React from 'react'

export type I18nProps = {
  en?: string[] | string | React.ReactNode
  zh?: string[] | string | React.ReactNode
  render?: (item: string[] | string, locale: string) => React.ReactNode
}

const I18n: React.FC<I18nProps> = (props) => {
  const { locale } = useRouter()
  const { render } = props
  let text = props[locale]

  if (Array.isArray(text)) {
    if (render) {
      text = text.map((item) => {
        return render(item, locale)
      })
    } else {
      text = text.join('')
    }
  }

  return <>{text}</>
}

export default I18n
