import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import Card, { CardProps } from '../../Card'
import PartnerRow from '../../PageIndex/PartnersSection/PartnerRow'
import React from 'react' // requires a loader
import * as styles from './index.module.scss'

const Partners: React.FC<CardProps> = (props) => {
  const { breakpoint } = useBreakpoint()

  return (
    <Card type="small" cardContentClassName={styles.cardContent} {...props}>
      {breakpoint === 'desktop' && (
        <Carousel showThumbs={false} showStatus={false}>
          <div className={styles.partners}>
            <PartnerRow from={0} to={4}></PartnerRow>
            <PartnerRow from={5} to={9}></PartnerRow>
            <PartnerRow from={10} to={14}></PartnerRow>
          </div>
          <div className={styles.partners}>
            <PartnerRow from={15} to={19}></PartnerRow>
            <PartnerRow from={20} to={24}></PartnerRow>
            <PartnerRow from={25} to={29}></PartnerRow>
          </div>
          <div className={styles.partners}>
            <PartnerRow from={30} to={31}></PartnerRow>
          </div>
        </Carousel>
      )}

      {breakpoint === 'tablet' && (
        <Carousel showThumbs={false} showStatus={false}>
          <div className={styles.partners}>
            <PartnerRow from={0} to={14}></PartnerRow>
          </div>
          <div className={styles.partners}>
            <PartnerRow from={0} to={14}></PartnerRow>
          </div>
        </Carousel>
      )}

      {breakpoint === 'mobile' && (
        <Carousel showThumbs={false} showStatus={false}>
          <div className={styles.partners}>
            <PartnerRow from={0} to={1}></PartnerRow>
            <PartnerRow from={2} to={3}></PartnerRow>
            <PartnerRow from={4} to={6}></PartnerRow>
            <PartnerRow from={7} to={8}></PartnerRow>
            <PartnerRow from={9} to={10}></PartnerRow>
            <PartnerRow from={11} to={12}></PartnerRow>
            <PartnerRow from={13} to={14}></PartnerRow>
          </div>
          <div className={styles.partners}>
            <PartnerRow from={0} to={1}></PartnerRow>
            <PartnerRow from={2} to={3}></PartnerRow>
            <PartnerRow from={4} to={6}></PartnerRow>
            <PartnerRow from={7} to={8}></PartnerRow>
            <PartnerRow from={9} to={10}></PartnerRow>
            <PartnerRow from={11} to={12}></PartnerRow>
            <PartnerRow from={13} to={14}></PartnerRow>
          </div>
        </Carousel>
      )}
    </Card>
  )
}

export default Partners
