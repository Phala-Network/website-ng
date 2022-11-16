import { isString } from '../../../../utils/isString'
import { useLocale } from '../../../../hooks/useLocale'
import Line from './Line'
import React from 'react'
import Year from './Year'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  newest?: boolean
  year: number
  quarter?: number
  content: {
    en: string[] | { title: string; text: string[] }[]
    zh: string[] | { title: string; text: string[] }[]
  }
}

const Item: React.FC<Props> = (props) => {
  const { year, quarter, content, newest } = props
  const locale = useLocale()

  return (
    <div
      className={classnames([
        styles.item,
        {
          // the item is newest
          [styles.newestText]: newest
        }
      ])}>
      <div className={styles.content}>
        <div className={styles.date}>
          <Year year={year}></Year>
          {quarter && <span className={styles.q}>Q{quarter}</span>}
        </div>
        <div className={styles.text}>
          {content[locale].map((item) => {
            if (isString(item)) {
              // for normal
              return (
                <div key={item} className={styles.itemText} dangerouslySetInnerHTML={{ __html: item }}>
                </div>
              )
            } else {
              // for the newest (2021)
              return (
                <div key={item.title} className={styles.newest}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.newestContent}>
                    {item.text.map((t) => {
                      return (
                        <div key={t} className={styles.itemText}>
                          {t}
                        </div>
                      )
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
