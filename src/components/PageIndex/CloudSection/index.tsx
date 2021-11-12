import React from 'react'
import { TechWhitepaperConfig } from '../../../config'
import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import Button from '../../Button'
import SectionHeader from '../../SectionHeader'
import * as styles from './index.module.scss'
import PlayerContent from './PlayerContent'

const CloudSection: React.FC = () => {
  const descriptionText = {
    en: 'Provide Trustless Computing to Web 3.0',
    zh: '为Web3.0提供零信任的计算'
  }

  const titleText = {
    en: ['Low Latency', 'High-Performance', 'Data Confidentiality'],
    zh: ['低延迟', '高性能计算', '数据隐私']
  }

  return (
    <div className={styles.cloudSection}>
      <div className="container">
        <div className={styles.content}>
          <div className="row">
            <div className="col-lg-8">
              <SectionHeader
                color="gray"
                title={titleText}
                titleClassName={styles.title}
                description={descriptionText}
              />
            </div>
            <div className="col-lg-4">
              <div className={styles.buttons}>
                <Button
                  href={EconomyWhitepaperConfig.href}
                  text={EconomyWhitepaperConfig.name}
                  type="link"
                  color="gray"
                  hasArrowIcon></Button>

                <Button
                  href={TechWhitepaperConfig.href}
                  text={TechWhitepaperConfig.name}
                  type="link"
                  color="gray"
                  hasArrowIcon></Button>
              </div>
            </div>
          </div>
        </div>
        <PlayerContent></PlayerContent>
      </div>
    </div>
  )
}

export default CloudSection
