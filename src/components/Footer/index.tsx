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
            <div className="col-lg-6">
              <div className={styles.left}>
                <Subscribe></Subscribe>

                <EmailInput />

                <MediaList></MediaList>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.right}>
                <div className="row">
                  <div className="col-sm-3">
                    <ListMenu no={0} data={MaintainMenuConfig}></ListMenu>
                  </div>
                  <div className="col-sm-9">
                    <ListMenu no={1} data={ResourcesMenuConfig}></ListMenu>
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
