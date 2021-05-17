import { MenuConfig } from '../../../config'
import IconClose from './IconClose'
import ListMenu from '../../ListMenu'
import React from 'react'
import ReactDom from 'react-dom'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  onClose: Function
  visible: boolean
}

const MobileMenu: React.FC<Props> = (props) => {
  const { onClose, visible } = props
  const prevent = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return ReactDom.createPortal(
    <div
      onTouchMove={prevent}
      onTouchStart={prevent}
      className={classnames([
        styles.mobileMenu,
        {
          [styles.visible]: visible
        }
      ])}>
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
