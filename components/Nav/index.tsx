import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../I18n'
import LangSwitch from '../LangSwitch'
import Logo from '../Logo'
import styles from './index.module.scss'

type Props = {}

const Nav: React.FC<Props> = (props) => {
  const { locale, route } = useRouter()

  const menus = [
    {
      name: {
        en: 'Learn About PHA',
        zh: '了解 PHA',
      },
    },
    {
      name: {
        en: 'Technology',
        zh: '技术',
      },
    },
    {
      name: {
        en: 'Ecosystem',
        zh: '生态',
      },
    },
    {
      name: {
        en: 'Resources',
        zh: '资源',
      },
    },
  ]

  return (
    <div className='container'>
      <nav className={styles.nav}>
        <Link
          href={route === '/' ? `/${locale}` : route}
          locale={route === '/' ? false : locale}>
          <Logo></Logo>
        </Link>
        <ul>
          {menus.map((menu) => {
            return (
              <li key={menu.name.en}>
                <a href='#'>
                  <I18n {...menu.name}></I18n>
                </a>
              </li>
            )
          })}
        </ul>
        <LangSwitch></LangSwitch>
      </nav>
    </div>
  )
}

export default Nav
