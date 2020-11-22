import React from 'react'
import { ContractSectionConfig } from '../../../config/indexPage/ContractSectionConfig'
import Button from '../../Button'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'
import List from './List'
import classnames from 'classnames'

type Props = {}

const ContractSection: React.FC<Props> = () => {
  return (
    <div className={styles.contractSection}>
      <div className={classnames([styles.content, 'container-lg'])}>
        <div className='row flex-column-reverse flex-lg-row '>
          <div className='col-lg-6'>
            <List></List>
          </div>
          <div className='col-lg-6'>
            <div className={styles.introduce}>
              <SectionHeader
                title={ContractSectionConfig.title}
                description={ContractSectionConfig.description}
              />

              <Button
                className={styles.button}
                text={ContractSectionConfig.button}
                hasArrowIcon></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractSection
