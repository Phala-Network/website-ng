import React from 'react'
import styles from './index.module.scss'
import ReactDom from 'react-dom'
import ListMenu from '../../ListMenu'
import { MenuConfig } from '../../../config'
import IconClose from './IconClose'

type Props = {
  onClose: Function
}

const MobileMenu: React.FC<Props> = (props) => {
  const { onClose } = props
  const prevent = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return ReactDom.createPortal(
    <div
      onTouchMove={prevent}
      onTouchStart={prevent}
      className={styles.mobileMenu}>
      <div onClick={() => onClose?.()} className={styles.x}>
        <IconClose></IconClose>
      </div>

      <div className={styles.content}>
        {MenuConfig.map((menu) => {
          return <ListMenu key={JSON.stringify(menu)} data={menu}></ListMenu>
        })}

        <div className={styles.line}></div>
      </div>
    </div>,
    document.body
  )
}

export default MobileMenu
