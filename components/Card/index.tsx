import { useRouter } from 'next/router'
import React from 'react'
import CardContent, { CardContentProps } from './CardContent'
import CardHeader, { CardHeaderProps } from './CardHeader'
import classnames from 'classnames'
import styles from './index.module.scss'

export type CardProps = CardHeaderProps &
  CardContentProps & {
    cardContentClassName?: string
    type: 'normal' | 'small' | 'vertical'
  }

const Card: React.FC<CardProps> = (props) => {
  const {
    name,
    index,
    children,
    cardContentClassName,
    type,
    firstLetter,
  } = props
  const { locale } = useRouter()

  return (
    <div
      className={classnames([styles.card, styles[type]])}
      id={name[locale].join('_')}>
      <CardHeader
        type={type}
        className={styles.cardHeader}
        name={name}
        index={index}></CardHeader>
      <CardContent
        firstLetter={firstLetter}
        className={classnames([styles.cardContent, cardContentClassName])}>
        {children}
      </CardContent>
    </div>
  )
}

export default Card
