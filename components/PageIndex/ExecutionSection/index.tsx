import React from 'react'
import { ExecutionSectionConfig } from '../../../config/indexPage/ExecutionSectionConfig'
import Button from '../../Button'
import I18n from '../../I18n'
import styles from './index.module.scss'
import List from './List'

type Props = {}

const ExecutionSection: React.FC<Props> = () => {
  return (
    <div className={styles.executionSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-lg-6'>
              <div className={styles.title}>
                <I18n {...ExecutionSectionConfig.titleText}></I18n>
              </div>
              <div className={styles.description}>
                <I18n {...ExecutionSectionConfig.descriptionText}></I18n>
              </div>
            </div>
            <div className='col-lg-6'>
              <Button
                className={styles.button}
                text={ExecutionSectionConfig.buttonText}
                href=''
                type='link'
                color='black'
                hasArrowIcon></Button>
            </div>
          </div>

          <List></List>
        </div>
      </div>
    </div>
  )
}

export default ExecutionSection
