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
          <div>
            {[0, 5, 10].map((item) => (
              <PartnerRow key={item} from={item} to={item + 4}></PartnerRow>
            ))}
          </div>
          <div>
            {[15, 20, 25].map((item) => (
              <PartnerRow key={item} from={item} to={item + 4}></PartnerRow>
            ))}
          </div>
          <div>
            {[30, 35, 40].map((item) => (
              <PartnerRow key={item} from={item} to={item + 4}></PartnerRow>
            ))}
          </div>
        </Carousel>
      )}

      {breakpoint === 'tablet' && (
        <Carousel showThumbs={false} showStatus={false}>
          <div>
            <PartnerRow from={0} to={14}></PartnerRow>
          </div>
          <div>
            <PartnerRow from={15} to={29}></PartnerRow>
          </div>
          <div>
            <PartnerRow from={30} to={44}></PartnerRow>
          </div>
        </Carousel>
      )}

      {breakpoint === 'mobile' && (
        <Carousel showThumbs={false} showStatus={false}>
          <div>
            {[0, 2, 4, 6, 8, 10, 12].map((item) => (
              <PartnerRow key={item} from={item} to={item + 1}></PartnerRow>
            ))}
          </div>
          <div>
            {[14, 16, 18, 20, 22, 24, 26].map((item) => (
              <PartnerRow key={item} from={item} to={item + 1}></PartnerRow>
            ))}
          </div>
          <div>
            {[28, 30, 32, 34, 36, 38, 40].map((item) => (
              <PartnerRow key={item} from={item} to={item + 1}></PartnerRow>
            ))}
          </div>
        </Carousel>
      )}
    </Card>
  )
}

export default Partners
