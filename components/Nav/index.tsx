import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MenuConfig } from '../../config'
import I18n from '../I18n'
import LangSwitch from '../LangSwitch'
import Logo from '../Logo'
import IconMenu from './IconMenu'
import styles from './index.module.scss'
import MobileMenu from './MobileMenu'
import SubMenu from './SubMenu'

type Props = {}

const Nav: React.FC<Props> = () => {
  const { locale } = useRouter()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  return (
    <div className={styles.bg}>
      <div className='container'>
        <nav className={styles.nav}>
          <Link passHref href={`/`}>
            <a>
              <Logo></Logo>
            </a>
          </Link>

          <ul className={styles.pcMenu}>
            {MenuConfig.map((menu) => {
              return (
                <li key={menu.name.en}>
                  <Link href={menu?.href?.[locale] ?? ''}>
                    <a className={styles.link}>
                      <I18n {...menu.name}></I18n>
                    </a>
                  </Link>

                  {menu.subMenu && <SubMenu data={menu.subMenu}></SubMenu>}
                </li>
              )
            })}
          </ul>

          <LangSwitch></LangSwitch>

          <IconMenu onClick={() => setMobileMenuVisible(true)} />
        </nav>
      </div>

      {mobileMenuVisible && (
        <MobileMenu onClose={() => setMobileMenuVisible(false)}></MobileMenu>
      )}
    </div>
  )
}

export default Nav
