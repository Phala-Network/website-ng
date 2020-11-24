import React from 'react'
import I18nRender from '../../I18nRender'
import styles from './index.module.scss'

type Props = {
  title: any
  content: any
}

const TextCard: React.FC<Props> = (props) => {
  const { title, content } = props

  return (
    <div className={styles.textCard}>
      <div className={styles.title}>
        <I18nRender {...title}></I18nRender>
      </div>
      <div className={styles.content}>
        <I18nRender {...content}></I18nRender>
      </div>
    </div>
  )
}

export default TextCard
