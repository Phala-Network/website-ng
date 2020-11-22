import React from 'react'
import styles from './index.module.scss'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const IconMenu: React.FC<Props> = (props) => {
  return (
    <div {...props} className={styles.iconMenu}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}

export default IconMenu
