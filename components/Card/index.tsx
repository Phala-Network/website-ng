import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CardContent, { CardContentProps } from './CardContent'
import CardHeader, { CardHeaderProps } from './CardHeader'
import classnames from 'classnames'
import styles from './index.module.scss'

export type CardProps = CardHeaderProps &
  CardContentProps & {
    cardContentClassName?: string
    cardHeaderClassName?: string
    type: 'normal' | 'small' | 'vertical' | 'wideNormal'
  }

const Card: React.FC<CardProps> = (props) => {
  const {
    name,
    index,
    children,
    cardContentClassName,
    cardHeaderClassName,
    type,
    firstLetter,
  } = props
  const { locale } = useRouter()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    // const el = document.getElementById(name[locale].join('_') + 'body')
    // const rect = el.getBoundingClientRect()
    // setHeight(rect.height)
  }, [name])

  return (
    <div
      className={classnames([styles.card, styles[type]])}
      id={name[locale].join('_')}>
      {/* <div className='section sticky-section'>
        <div className='lead-wrap'>
          <div className='lead'> */}
      <CardHeader
        style={{ height, marginBottom: -height }}
        type={type}
        className={classnames([styles.cardHeader, cardHeaderClassName])}
        name={name}
        index={index}></CardHeader>
      {/* </div>
        </div> */}

      {/* <div className='story sticky'>
          <div className='story-inner weblgl-story-content'> */}
      <CardContent
        id={name[locale].join('_') + 'body'}
        firstLetter={firstLetter}
        className={classnames([styles.cardContent, cardContentClassName])}>
        {children}
      </CardContent>
      {/* </div>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Card
