import React from 'react'
import styles from './index.module.scss'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'></div>
    </footer>
  )
}

export default Footer
