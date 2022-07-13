import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { PartnersSectionConfig } from '../../../config/PageIndexConfig/PartnersSectionConfig'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import PartnerRow from './PartnerRow'
import React from 'react'
import SectionHeader from '../../SectionHeader'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  noHeader?: boolean
}

const PartnersSection: React.FC<Props> = (props) => {
  const { noHeader = false } = props
  const { breakpoint } = useBreakpoint()

  return (
    <div className={styles.partnersSection}>
      <div className="container">
        <div className={classnames([styles.content, 'row'])}>
          {breakpoint === 'desktop' && (
            <div className={styles.partners}>
              <Carousel showThumbs={false} showStatus={false}>
                <div>
                  {[0, 5, 10].map((item) => (
                    <PartnerRow
                      key={item}
                      from={item}
                      to={item + 4}></PartnerRow>
                  ))}
                </div>
                <div>
                  {[15, 20, 25].map((item) => (
                    <PartnerRow
                      key={item}
                      from={item}
                      to={item + 4}></PartnerRow>
                  ))}
                </div>
                <div>
                  {[30, 35].map((item) => (
                    <PartnerRow
                      key={item}
                      from={item}
                      to={item + 4}></PartnerRow>
                  ))}
                </div>
              </Carousel>
            </div>
          )}

          {breakpoint === 'tablet' && (
            <div className={styles.partners}>
              <SectionHeader
                className={classnames([styles.mobileHeader])}
                title={PartnersSectionConfig.title}
              />

              <Carousel showThumbs={false} showStatus={false}>
                <PartnerRow from={0} to={19}></PartnerRow>
                <PartnerRow from={20} to={39}></PartnerRow>
              </Carousel>
            </div>
          )}

          {breakpoint === 'mobile' && (
            <div className={styles.partners}>
              {!noHeader && (
                <SectionHeader
                  className={classnames([styles.mobileHeader])}
                  title={PartnersSectionConfig.title}
                />
              )}

              <Carousel showThumbs={false} showStatus={false}>
                <div>
                  {[0, 2, 4, 6, 8, 10, 12].map((item) => (
                    <PartnerRow
                      key={item}
                      from={item}
                      to={item + 1}></PartnerRow>
                  ))}
                </div>
                <div>
                  {[14, 16, 18, 20, 22, 24, 26].map((item) => (
                    <PartnerRow
                      key={item}
                      from={item}
                      to={item + 1}></PartnerRow>
                  ))}
                </div>
                <div>
                  {[28, 30, 32, 34, 36, 38].map((item) => (
                    <PartnerRow
                      key={item}
                      from={item}
                      to={item + 1}></PartnerRow>
                  ))}
                </div>
              </Carousel>
            </div>
          )}

          {!noHeader && (
            <SectionHeader
              className={classnames([styles.header])}
              title={PartnersSectionConfig.title}
              description={PartnersSectionConfig.description}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
