import React from 'react'
import { MaintainMenuConfig, ResourcesMenuConfig } from '../../config'
import ListMenu from '../ListMenu'
import Copyright from './Copyright'
import EmailInput from './EmailInput'
import * as styles from './index.module.scss'
import MediaList from './MediaList'
import Subscribe from './Subscribe'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.left}>
                <Subscribe></Subscribe>

                <EmailInput />

                <MediaList></MediaList>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.right}>
                <div className="row">
                  <div className="col-sm-4">
                    <ListMenu data={MaintainMenuConfig}></ListMenu>
                  </div>
                  <div className="col-sm-8">
                    <ListMenu data={ResourcesMenuConfig}></ListMenu>
                  </div>
                </div>

                <Copyright></Copyright>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
