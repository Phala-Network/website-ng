import React from 'react'
import I18n from '../../I18n'
import styles from './ParticipateItem.module.scss'

interface Props {
  index: number
  icon: string
  title: {
    en: React.ReactNode
    zh: React.ReactNode
  }
  description: {
    en: React.ReactNode
    zh: React.ReactNode
  }
}

const ParticipateItem = (x: Props) => {
  return (
    <div className={styles.parcitipateItem}>
      <div className={styles.left}>
        {/* @ts-ignore: For svg element. */}
        <svg class={styles.numberSvg} viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="120" className={styles.number}>{x.index + 1}</text>
        </svg>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <img className={styles.icon} src={x.icon} alt="" />
        </div>
        <div className={styles.rightBottom}>
          <p className={styles.title}>
            <I18n {...x.title} />
          </p>
          <p className={styles.description}>
            <I18n {...x.description} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default ParticipateItem