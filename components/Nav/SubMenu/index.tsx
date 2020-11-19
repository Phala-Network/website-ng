import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../../I18n'
import styles from './index.module.scss'

type Props = {
  data: {
    name: {
      en: string
      zh: string
    }
    href:
      | string
      | {
          en: string
          zh: string
        }
  }[]
}

const SubMenu: React.FC<Props> = (props) => {
  const { data } = props
  const { locale } = useRouter()

  return (
    <div className={styles.subMenu}>
      <div className={styles.content}>
        {data.map((item) => {
          return (
            <div className={styles.item} key={item.name.en}>
              <a
                target='_blank'
                href={
                  typeof item.href === 'string' ? item.href : item.href[locale]
                }>
                <I18n {...item.name}></I18n>
              </a>
            </div>
          )
        })}
        <div className={styles.arrow}></div>
      </div>
    </div>
  )
}

export default SubMenu
