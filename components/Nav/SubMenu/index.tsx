import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../../I18n'
import styles from './index.module.scss'
import Link from 'next/link'

type Props = {
  data: {
    name: { [key: string]: string }
    href: { [key: string]: string }
  }[]
}

const SubMenu: React.FC<Props> = (props) => {
  const { data } = props
  const { locale } = useRouter()

  return (
    <div className={styles.subMenu}>
      <div className={styles.content}>
        <div className={styles.arrow}></div>

        {data.map((item) => {
          return (
            <div className={styles.item} key={item.name.en}>
              <Link
                href={
                  typeof item.href === 'string' ? item.href : item.href[locale]
                }>
                <a target='_blank'>
                  <I18n {...item.name}></I18n>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu
