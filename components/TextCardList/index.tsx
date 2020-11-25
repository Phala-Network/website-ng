import Link from 'next/link'
import React from 'react'
import I18n from '../I18n'
import styles from './index.module.scss'

const CardList: React.FC<any> = (props) => {
  const { config = [], imgPath } = props

  return (
    <div className={styles.cardList}>
      {config.map((item, index) => {
        return (
          <div className={styles.item}>
            <Link passHref href={item.url}>
              <a target='_blank'>
                <img src={`${imgPath}${index}.svg`} alt={item.url} />
                <div className={styles.title}>
                  <I18n {...item.title}></I18n>
                </div>
                <div className={styles.description}>
                  <I18n {...item.description}></I18n>
                </div>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CardList
