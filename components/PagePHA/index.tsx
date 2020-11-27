import React from 'react'
import { EconomyWhitepaperConfig } from '../../config/EconomyWhitepaperConfig'
import { PagePHAConfig } from '../../config/PagePHA'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'
import TokenUtibility from './TokenUtibility'
import Distribution from './Distribution'
import Mining from './Mining'
import HowToGet from './HowToGet'
import BgLayer from '../BgLayer'

type Props = {}

const PagePHA: React.FC<Props> = () => {
  return (
    <BgLayer backgroundUrl='/images/PagePHA/bg.png'>
      <PageTitle zh='PHA' en='PHA'></PageTitle>
      <NormalLayout className={styles.pagePHA}>
        <div className='container'>
          <DetailPageHeader {...PagePHAConfig}></DetailPageHeader>

          <DetailPageHeaderButtons>
            <DetailPageButton
              className={styles.btn}
              {...EconomyWhitepaperConfig}
            />
          </DetailPageHeaderButtons>

          <div id='content' className={styles.content}>
            {PagePHAConfig.content.map((item, index) => {
              const Component =
                {
                  TokenUtibility,
                  Distribution,
                  Mining,
                  HowToGet,
                }[item.id] ?? TokenUtibility

              return (
                <Component
                  {...item}
                  index={index + 1}
                  key={JSON.stringify(item.name)}></Component>
              )
            })}

            <FloatMenu
              menuTitle={PagePHAConfig.menuTitle}
              menu={PagePHAConfig.content}></FloatMenu>
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PagePHA
