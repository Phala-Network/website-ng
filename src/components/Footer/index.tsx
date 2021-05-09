import { MaintainMenuConfig, ResourcesMenuConfig } from '../../config'
import Copyright from './Copyright'
import EmailInput from './EmailInput'
import ListMenu from '../ListMenu'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MediaList from './MediaList'
import React from 'react'
import Subscribe from './Subscribe'
import * as styles from './index.module.scss'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-md-6'>
              <div className={styles.left}>
                <Subscribe></Subscribe>
                <MailchimpSubscribe
                  url={
                    'https://network.us19.list-manage.com/subscribe/post?u=af3fc86df5d49999a90140756&amp;id=5b9fbb1db9'
                  }
                  render={({ subscribe, status, message }) => (
                    <EmailInput
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  )}
                />
                <MediaList></MediaList>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={styles.right}>
                <div className='row'>
                  <div className='col-sm-4'>
                    <ListMenu data={MaintainMenuConfig}></ListMenu>
                  </div>
                  <div className='col-sm-8'>
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
