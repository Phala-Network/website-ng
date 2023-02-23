import * as styles from './block.scss'
import React from 'react'

export const Text = ({ text }: { text: any }) => {
  if (!text) {
    return null
  }
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span
        className={[
          bold ? styles.bold : '',
          code ? styles.code : '',
          italic ? styles.italic : '',
          strikethrough ? styles.strikethrough : '',
          underline ? styles.underline : ''
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
        key={text.id}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
}
