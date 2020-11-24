import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

export type CardContentProps = {
  bgIndex?: number
  className?: string
}

const CardContent: React.FC<CardContentProps> = (props) => {
  const { bgIndex, className } = props

  return (
    <div
      className={classnames([
        styles.cardContent,
        styles[`bg${bgIndex}`],
        className,
      ])}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

export default CardContent
