import React from 'react'
import { PartnersSectionConfig } from '../../../config/indexPage/PartnersSectionConfig'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'
import PartnerRow from './PartnerRow'
import classnames from 'classnames'

type Props = {}

const PartnersSection: React.FC<Props> = () => {
  return (
    <div className={styles.partnersSection}>
      <div className='container-md'>
        <div className={classnames([styles.content, 'row'])}>
          {/* partners */}
          <div className={classnames([styles.partners, styles.xlHide])}>
            <PartnerRow from={0} to={3}></PartnerRow>
            <PartnerRow from={4} to={8}></PartnerRow>
            <PartnerRow from={9} to={12}></PartnerRow>
          </div>

          <div className={classnames([styles.partners, styles.xlShow])}>
            <SectionHeader
              className={classnames([styles.mobileHeader])}
              title={PartnersSectionConfig.title}
            />

            <PartnerRow from={0} to={12}></PartnerRow>
          </div>

          <SectionHeader
            className={classnames([styles.header])}
            title={PartnersSectionConfig.title}
            description={PartnersSectionConfig.description}
          />
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
