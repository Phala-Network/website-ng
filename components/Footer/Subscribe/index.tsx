import React from 'react'
import I18n from '../../I18n'
import styles from './index.module.scss'

type Props = {}

const Subscribe: React.FC<Props> = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.title}>
        <I18n en='Subscribe' zh='订阅'></I18n>
      </div>
      <div className={styles.description}>
        <I18n
          en='Subscribe to the newsletter to hear about Phala Network updates and events.'
          zh='订阅消息，了解Phala网络的最新动态和活动。'></I18n>
      </div>
    </div>
  )
}

export default Subscribe
