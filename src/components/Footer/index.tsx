import { DevelopersConfig, FooterAboutUsConfig } from '../../config'
import Copyright from './Copyright'
import EmailInput from './EmailInput'
import ListMenu from '../ListMenu'
import MediaList from './MediaList'
import React from 'react'
import Subscribe from './Subscribe'
import * as styles from './index.module.scss'

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
                  <div className="col-sm-4">
                    <ListMenu no={0} data={DevelopersConfig}></ListMenu>
                  </div>
                  <div className="col-sm-8">
                    <ListMenu no={1} data={FooterAboutUsConfig}></ListMenu>
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
