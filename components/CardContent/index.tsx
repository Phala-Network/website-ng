import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

export type CardContentProps = {
  bgIndex?: number
  className?: string
  firstLetter?: boolean
}

const CardContent: React.FC<CardContentProps> = (props) => {
  const { bgIndex, className, firstLetter = false } = props

  return (
    <div
      className={classnames([
        styles.cardContent,
        styles[`bg${bgIndex}`],
        {
          [styles.firstLetter]: firstLetter,
        },
        className,
      ])}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

export default CardContent
