import React from 'react'
import I18n from '../I18n'
import TagA from '../TagA'
import styles from './index.module.scss'
import classnames from 'classnames'

const TextCardList: React.FC<any> = (props) => {
  const { config = [], imgPath, hoverEffect = false } = props

  return (
    <div className={styles.textCardList}>
      {config.map((item, index) => {
        return (
          <div
            key={JSON.stringify(item)}
            className={classnames([
              styles.item,
              {
                [styles.hover]: hoverEffect,
              },
            ])}>
            <TagA href={item.url}>
              <img src={`${imgPath}${index}.svg`} alt={item.url} />
              <div className={styles.title}>
                <I18n {...item.title}></I18n>
              </div>
              <div className={styles.description}>
                <I18n {...item.description}></I18n>
              </div>
            </TagA>
          </div>
        )
      })}
    </div>
  )
}

export default TextCardList
