import React from 'react'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import Card, { CardProps } from '../../Card'
import PartnerRow from '../../PageIndex/PartnersSection/PartnerRow'
import styles from './index.module.scss'

const Partners: React.FC<CardProps> = (props) => {
  const { breakpoint } = useBreakpoint()

  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      {breakpoint === 'desktop' && (
        <div className={styles.partners}>
          <PartnerRow from={0} to={3}></PartnerRow>
          <PartnerRow from={4} to={8}></PartnerRow>
          <PartnerRow from={9} to={13}></PartnerRow>
        </div>
      )}

      {breakpoint === 'tablet' && (
        <div className={styles.partners}>
          <PartnerRow from={0} to={13}></PartnerRow>
        </div>
      )}

      {breakpoint === 'mobile' && (
        <div className={styles.partners}>
          <PartnerRow from={0} to={1}></PartnerRow>
          <PartnerRow from={2} to={3}></PartnerRow>
          <PartnerRow from={4} to={6}></PartnerRow>
          <PartnerRow from={7} to={8}></PartnerRow>
          <PartnerRow from={9} to={10}></PartnerRow>
          <PartnerRow from={11} to={12}></PartnerRow>
          <PartnerRow from={13} to={13}></PartnerRow>
        </div>
      )}
    </Card>
  )
}

export default Partners
