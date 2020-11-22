import React from 'react'
import { ExecutionSectionConfig } from '../../../config/indexPage/ExecutionSectionConfig'
import Button from '../../Button'
import I18n from '../../I18n'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import List from './List'

type Props = {}

const ExecutionSection: React.FC<Props> = () => {
  return (
    <div className={styles.executionSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-xl-6'>
              <SectionHeader
                title={ExecutionSectionConfig.titleText}
                description={ExecutionSectionConfig.descriptionText}
              />
            </div>
            <div className='col-xl-6'>
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
