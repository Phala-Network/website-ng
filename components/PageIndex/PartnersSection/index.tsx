import React from 'react'
import { PartnersSectionConfig } from '../../../config/indexPage/PartnersSectionConfig'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import PartnerRow from './PartnerRow'
import classnames from 'classnames'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

type Props = {}

const PartnersSection: React.FC<Props> = () => {
  const { breakpoint } = useBreakpoint()

  return (
    <div className={styles.partnersSection}>
      <div className='container'>
        <div className={classnames([styles.content, 'row'])}>
          {breakpoint === 'desktop' && (
            <div className={styles.partners}>
              <PartnerRow from={0} to={3}></PartnerRow>
              <PartnerRow from={4} to={8}></PartnerRow>
              <PartnerRow from={9} to={12}></PartnerRow>
            </div>
          )}

          {breakpoint === 'tablet' && (
            <div className={styles.partners}>
              <SectionHeader
                className={classnames([styles.mobileHeader])}
                title={PartnersSectionConfig.title}
              />

              <PartnerRow from={0} to={12}></PartnerRow>
            </div>
          )}

          {breakpoint === 'mobile' && (
            <div className={styles.partners}>
              <SectionHeader
                className={classnames([styles.mobileHeader])}
                title={PartnersSectionConfig.title}
              />

              <PartnerRow from={0} to={1}></PartnerRow>
              <PartnerRow from={2} to={3}></PartnerRow>
              <PartnerRow from={4} to={6}></PartnerRow>
              <PartnerRow from={7} to={8}></PartnerRow>
              <PartnerRow from={9} to={10}></PartnerRow>
              <PartnerRow from={11} to={12}></PartnerRow>
            </div>
          )}

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
