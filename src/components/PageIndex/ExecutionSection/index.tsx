import { ExecutionSectionConfig } from '../../../config/PageIndexConfig/ExecutionSectionConfig'
import { SecureEnclaveConfig } from '../../../config/SecureEnclaveConfig'
import Button from '../../Button'
import List from './List'
import React from 'react'
import SectionHeader from '../../SectionHeader'
import * as styles from './index.module.scss'

type Props = {}

const ExecutionSection: React.FC<Props> = () => {
  return (
    <div className={styles.executionSection}>
      <div className="container">
        <div className={styles.content}>
          <div className="row">
            <div className="col-xl-6">
              <SectionHeader
                title={ExecutionSectionConfig.titleText}
                description={ExecutionSectionConfig.descriptionText}
              />
            </div>
            <div className="col-xl-6">
              <Button
                href={SecureEnclaveConfig.href}
                className={styles.button}
                text={ExecutionSectionConfig.buttonText}
                color="black"
                type="link"
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
