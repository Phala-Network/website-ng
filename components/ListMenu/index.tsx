import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../I18n'
import styles from './index.module.scss'
import Link from 'next/link'

type Props = {
  data: any
}

const ListMenu: React.FC<Props> = (props) => {
  const { data } = props
  const { locale } = useRouter()

  return (
    <div className={styles.listMenu}>
      <div className={styles.title}>
        <Link href={data?.href?.[locale] ?? ''}>
          <a>
            <I18n {...data.name}></I18n>
          </a>
        </Link>
      </div>

      {data.subMenu && (
        <div className={styles.items}>
          {data.subMenu.map((item) => {
            return (
              <div className={styles.item} key={item.name.en}>
                <Link
                  href={
                    typeof item.href === 'string'
                      ? item.href
                      : item.href[locale]
                  }>
                  <a>
                    <I18n {...item.name}></I18n>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ListMenu
