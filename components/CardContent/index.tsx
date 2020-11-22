import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

export type CardContentProps = {
  bgIndex?: number
}

const CardContent: React.FC<CardContentProps> = (props) => {
  const { bgIndex } = props

  return (
    <div className={classnames([styles.cardContent, styles[`bg${bgIndex}`]])}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

export default CardContent
