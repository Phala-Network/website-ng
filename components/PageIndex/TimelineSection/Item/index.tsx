import { useRouter } from 'next/router'
import React from 'react'
import { isString } from '../../../../utils/isString'
import styles from './index.module.scss'
import Line from './Line'
import Year from './Year'
import classnames from 'classnames'

type Props = {
  newest: boolean
  year: number
  quarter?: number
  content: {
    en: string[] | { title: string; text: string[] }[]
    zh: string[] | { title: string; text: string[] }[]
  }
}

const Item: React.FC<Props> = (props) => {
  const { year, quarter, content, newest } = props
  const { locale } = useRouter()

  return (
    <div
      className={classnames([
        styles.item,
        {
          // the item is newest
          [styles.newestText]: newest,
        },
      ])}>
      <div>
        <div className={styles.date}>
          <Year year={year}></Year>
          {quarter && <span className={styles.q}>Q{quarter}</span>}
        </div>
        <div className={styles.text}>
          {content[locale].map((item) => {
            if (isString(item)) {
              // for normal
              return <div key={item}>{item}</div>
            } else {
              // for the newest (2021)
              return (
                <div key={item.title} className={styles.newest}>
                  <div>{item.title}</div>
                  <div className={styles.newestContent}>
                    {item.text.map((t) => {
                      return <div>{t}</div>
                    })}
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>

      <Line className={styles.line}></Line>
    </div>
  )
}

export default Item
