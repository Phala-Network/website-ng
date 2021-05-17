import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

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
          [styles.firstLetter]: firstLetter
        },
        className
      ])}>
      {props.children}
    </div>
  )
}

export default CardContent
