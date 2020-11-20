import React from 'react'
import EmailInput from './EmailInput'
import MediaList from './MediaList'
import styles from './index.module.scss'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <EmailInput></EmailInput>
        <MediaList></MediaList>
      </div>
    </footer>
  )
}

export default Footer
