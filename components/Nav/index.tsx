import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import LangSwitch from '../LangSwitch'
import Logo from '../Logo'
import styles from './index.module.scss'

type Props = {}

const Nav: React.FC<Props> = (props) => {
  const { locale, route } = useRouter()

  const menus = [
    {
      name: 'Learn',
    },
    {
      name: 'Developers',
    },
    {
      name: 'Ecosystem',
    },
    {
      name: 'Products',
    },
    {
      name: 'Resources',
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
              <li key={menu.name}>
                <a href='#'>{menu.name}</a>
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
