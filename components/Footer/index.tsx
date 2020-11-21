import React from 'react'
import EmailInput from './EmailInput'
import MediaList from './MediaList'
import styles from './index.module.scss'
import Subscribe from './Subscribe'
import Menu from './Menu'
import { MaintainMenuConfig, ResourcesMenuConfig } from '../../config'
import Copyright from './Copyright'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.left}>
              <Subscribe></Subscribe>
              <EmailInput></EmailInput>
              <MediaList></MediaList>
            </div>
          </div>
          <div className='col-md-6'>
            <div className={styles.right}>
              <div className='row'>
                <div className='col-sm-4'>
                  <Menu data={MaintainMenuConfig}></Menu>
                </div>
                <div className='col-sm-8'>
                  <Menu data={ResourcesMenuConfig}></Menu>
                </div>
              </div>

              <Copyright></Copyright>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
