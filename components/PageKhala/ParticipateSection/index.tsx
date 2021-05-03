import React from 'react'
import I18n from '../../I18n'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import ParticipateItem from './ParticipateItem'
import { ParticipateSectionConfig } from '../../../config/PageKhala/ParticipateSectionConfig'

import styles from './index.module.scss'

interface Props { }

const ParticipateSection = (x: Props) => {
  const { breakpoint } = useBreakpoint()

  return (
    <div className={styles.participateSection}>
      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.title}>
            <I18n
              en={<>How do I<br />participate<br />Crowdloan?</>}
              zh={<>如何<br />参与众贷？</>}
            />
          </p>
          <p className={styles.description}>
            <I18n
              en="Khala crowdfund slot lease using Kusama’s built-in crowdloan mechanism."
              zh="Khala 使用 Kusama 的内置众贷机制对插槽租赁标的进行众贷。"
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