import React from 'react'
import { PartnersSectionConfig } from '../../../config/indexPage/PartnersSectionConfig'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'
import PartnerRow from './PartnerRow'

type Props = {}

const PartnersSection: React.FC<Props> = () => {
  return (
    <div className={styles.partnersSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            {/* partners */}
            <div className={styles.partners}>
              <PartnerRow from={0} to={3}></PartnerRow>
              <PartnerRow from={4} to={8}></PartnerRow>
              <PartnerRow from={9} to={12}></PartnerRow>
            </div>
            <SectionHeader
              className={styles.header}
              title={PartnersSectionConfig.title}
              description={PartnersSectionConfig.description}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
