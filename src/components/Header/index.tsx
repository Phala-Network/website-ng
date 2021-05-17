import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const Header: React.FC<Props> = (props) => {
  return <header className={styles.header}>{props.children}</header>
}

export default Header
