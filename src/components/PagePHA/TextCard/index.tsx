import I18nRender from '../../I18nRender'
import React from 'react'
import TagA from '../../TagA'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  title: any
  content: any
  link?: any
}

const TextCard: React.FC<Props> = (props) => {
  const { title, content, link } = props

  return (
    <TagA href={link}>
      <div
        className={classnames([
          styles.textCard,
          {
            [styles.link]: link
          }
        ])}>
        <div className={styles.title}>
          <I18nRender {...title}></I18nRender>
        </div>
        <div className={styles.content}>
          <I18nRender {...content}></I18nRender>
        </div>
      </div>
    </TagA>
  )
}

export default TextCard
