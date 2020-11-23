import { useRouter } from 'next/router'
import React from 'react'
import RandomBlock from '../RandomBlock'
import styles from './index.module.scss'

export type CardHeaderProps = {
  index?: number
  name?: { [key: string]: string[] }
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { index, name } = props
  const { locale } = useRouter()

  return (
    <div id={name[locale].join('_')} className={styles.cardHeader}>
      <div
        className={styles.target}
        id={'title_' + name[locale].join('_')}></div>
      <div className={styles.top}>
        <div>0{index}_</div>
        <div>
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
