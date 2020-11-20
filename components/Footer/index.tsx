import React from 'react'
import EmailInput from './EmailInput'
import styles from './index.module.scss'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <EmailInput></EmailInput>
      </div>
    </footer>
  )
}

export default Footer
