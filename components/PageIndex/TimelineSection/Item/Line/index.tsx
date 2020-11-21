import React from 'react'
import styles from './index.module.scss'

type Props = {}

const Line: React.FC<Props> = () => {
  return (
    <div className={styles.line}>
      <div className={styles.o}></div>
      <div className={styles.l}></div>
    </div>
  )
}

export default Line
