import { useLocale } from '../../hooks/useLocale'
import CardContent, { CardContentProps } from './CardContent'
import CardHeader, { CardHeaderProps } from './CardHeader'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

export type CardProps = CardHeaderProps &
  CardContentProps & {
    cardContentClassName?: string
    cardHeaderClassName?: string
    type?: 'normal' | 'small' | 'vertical' | 'wideNormal'
  }

const Card: React.FC<CardProps> = (props) => {
  const {
    name,
    index,
    children,
    cardContentClassName,
    cardHeaderClassName,
    type,
    firstLetter
  } = props
  const locale = useLocale()

  return (
    <div
      className={classnames([styles.card, styles[type]])}
      id={name[locale].join('_')}>
      <CardHeader
        type={type}
        className={classnames([styles.cardHeader, cardHeaderClassName])}
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
