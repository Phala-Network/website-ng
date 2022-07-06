import { JoinUsConfig, PageAboutUsConfig } from '../../config/PageAboutUs'
import BgLayer from '../BgLayer'
import CommunityBuilder from './CommunityBuilder'
// import Contributor from './Contributor'
// import Council from './Council'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import Partners from './Partners'
import PhalaCore from './PhalaCore'
import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const PageAboutUs: React.FC<Props> = () => {
  return (
    <BgLayer backgroundUrl="/images/PageAboutUs/bg.png">
      <PageTitle zh="关于我们" en="AboutUs"></PageTitle>
      <NormalLayout className={styles.pageAboutUs}>
        <div className="container">
          <div className={styles.header}>
            <DetailPageHeader {...PageAboutUsConfig}></DetailPageHeader>

            <DetailPageHeaderButtons>
              <DetailPageButton className={styles.btn} {...JoinUsConfig} />
            </DetailPageHeaderButtons>
          </div>

          <div id="content" className={styles.content}>
            {PageAboutUsConfig.content.map((item, index) => {
              const Component =
                {
                  PhalaCore,
                  // Contributor,
                  // Council,
                  CommunityBuilder,
                  Partners
                }[item.id] ?? PhalaCore

              return (
                <Component
                  {...item}
                  index={index + 1}
                  key={JSON.stringify(item)}></Component>
              )
            })}

            <FloatMenu
              menuTitle={PageAboutUsConfig.menuTitle}
              menu={PageAboutUsConfig.content}></FloatMenu>
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PageAboutUs
