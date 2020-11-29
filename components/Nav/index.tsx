import React, { useState } from 'react'
import { MenuConfig } from '../../config'
import { useClient } from '../../hooks/useClient'
import I18n from '../I18n'
import LangSwitch from '../LangSwitch'
import Logo from '../Logo'
import TagA from '../TagA'
import IconMenu from './IconMenu'
import styles from './index.module.scss'
import MobileMenu from './MobileMenu'
import SubMenu from './SubMenu'

type Props = {}

const Nav: React.FC<Props> = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [isClient] = useClient()

  return (
    <div className={styles.bg}>
      <div className='container'>
        <nav className={styles.nav}>
          <TagA href={`/`}>
            <Logo></Logo>
          </TagA>

          <ul className={styles.pcMenu}>
            {MenuConfig.map((menu) => {
              return (
                <li key={menu.name.en}>
                  <TagA href={menu?.href} className={styles.link}>
                    <I18n {...menu.name}></I18n>
                  </TagA>

                  {menu.subMenu && <SubMenu data={menu.subMenu}></SubMenu>}
                </li>
              )
            })}
          </ul>

          <LangSwitch></LangSwitch>

          <IconMenu onClick={() => setMobileMenuVisible(true)} />
        </nav>
      </div>

      {isClient && (
        <MobileMenu
          visible={mobileMenuVisible}
          onClose={() => setMobileMenuVisible(false)}></MobileMenu>
      )}
    </div>
  )
}

export default Nav
