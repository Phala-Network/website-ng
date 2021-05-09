import { useLocale } from '../../hooks/useLocale'
import React from 'react'

export type I18nProps = {
  en?: string[] | string
  zh?: string[] | string
  render?: Function
}

const I18n: React.FC<I18nProps> = (props) => {
  const locale = useLocale()
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
