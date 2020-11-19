import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../I18n'
import LangSwitch from '../LangSwitch'
import Logo from '../Logo'
import { menuData } from './data'
import styles from './index.module.scss'
import SubMenu from './SubMenu'

type Props = {}

const Nav: React.FC<Props> = () => {
  const { locale, route } = useRouter()

  return (
    <div className={styles.bg}>
      <div className='container'>
        <nav className={styles.nav}>
          <Link passHref href={`/${locale}`} locale={false}>
            <a>
              <Logo></Logo>
            </a>
          </Link>
          <ul>
            {menuData.map((menu) => {
              return (
                <li key={menu.name.en}>
                  <a className={styles.link} target='_blank' href={menu.href}>
                    <I18n {...menu.name}></I18n>
                  </a>

                  {menu.subMenu && <SubMenu data={menu.subMenu}></SubMenu>}
                </li>
              )
            })}
          </ul>
          <LangSwitch></LangSwitch>
        </nav>
      </div>
    </div>
  )
}

export default Nav
