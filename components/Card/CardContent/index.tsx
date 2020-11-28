import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

export type CardContentProps = {
  bgIndex?: number
  className?: string
  firstLetter?: boolean
  id?: string
}

const CardContent: React.FC<CardContentProps> = (props) => {
  const { bgIndex, className, firstLetter = false, id } = props

  return (
    <div
      id={id}
      className={classnames([
        styles.cardContent,
        styles[`bg${bgIndex}`],
        {
          [styles.firstLetter]: firstLetter,
        },
        className,
      ])}>
      {props.children}
    </div>
  )
}

export default CardContent
