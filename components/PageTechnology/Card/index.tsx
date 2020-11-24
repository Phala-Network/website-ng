import { useRouter } from 'next/router'
import React from 'react'
import CardContent, { CardContentProps } from '../../CardContent'
import CardHeader, { CardHeaderProps } from '../../CardHeader'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = CardHeaderProps &
  CardContentProps & {
    cardContentClassName?: string
  }

const Card: React.FC<Props> = (props) => {
  const { name, index, children, cardContentClassName } = props
  const { locale } = useRouter()

  return (
    <div className={styles.card} id={name[locale].join('_')}>
      <CardHeader
        className={styles.cardHeader}
        name={name}
        index={index}></CardHeader>
      <CardContent
        className={classnames([styles.cardContent, cardContentClassName])}>
        {children}
      </CardContent>
    </div>
  )
}

export default Card
