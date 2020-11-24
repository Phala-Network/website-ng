import { useRouter } from 'next/router'
import React from 'react'
import RandomBlock from '../../RandomBlock'
import classnames from 'classnames'
import styles from './index.module.scss'

export type CardHeaderProps = {
  index?: number
  name?: { [key: string]: string[] }
  className?: string
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { index, name, className } = props
  const { locale } = useRouter()

  return (
    <div className={classnames([styles.cardHeader, className])}>
      <div
        className={styles.target}
        // id for link jump
        id={'title_' + name[locale].join('_')}></div>
      <div className={styles.top}>
        {/* 01_ */}
        <div>0{index}_</div>
        <div className={styles.randomBlock}>
          <RandomBlock></RandomBlock>
        </div>
      </div>
      <div className={styles.name}>
        {name[locale].map((str) => {
          return <div key={str}>{str}</div>
        })}
      </div>
    </div>
  )
}

export default CardHeader
