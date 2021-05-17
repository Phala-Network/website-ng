import { ParticipateSectionConfig } from '../../../config/PageKhala/ParticipateSectionConfig'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import I18n from '../../I18n'
import ParticipateItem from './ParticipateItem'
import React from 'react'

import * as styles from './index.module.scss'

interface Props { }

const ParticipateSection = (x: Props) => {
  return (
    <div className={styles.participateSection}>
      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.title}>
            <I18n
              en={<>How can I help<br />with the Crowdloan?</>}
              zh={<>如何<br />参与众贷？</>}
            />
          </p>
          <p className={styles.description}>
            <I18n
              en="Support Khala’s auction bid through Kusama’s built-in Crowdloan mechanism, and earn rewards!"
              zh="使用 Kusama 的内置众贷功能支持 Khala 竞拍，并获得奖励！"
            />
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.participateItems}>
            {
              ParticipateSectionConfig.map((item, index) => <ParticipateItem key={index} {...item} index={index} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParticipateSection
