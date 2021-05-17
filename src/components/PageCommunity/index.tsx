import { PageCommunityConfig } from '../../config/PageCommunity'
import BgLayer from '../BgLayer'
import Build from './Build'
import DetailPageHeader from '../DetailPageHeader'
import FloatMenu from '../FloatMenu'
import Join from './Join'
import Maintain from './Maintain'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const PageCommunity: React.FC<Props> = () => {
  return (
    <BgLayer backgroundUrl='/images/PageCommunity/bg.png'>
      <PageTitle zh='社区' en='Community'></PageTitle>
      <NormalLayout className={styles.pageCommunity}>
        <div className='container'>
          <div className={styles.header}>
            <DetailPageHeader {...PageCommunityConfig}></DetailPageHeader>
          </div>

          <div id='content' className={styles.content}>
            {PageCommunityConfig.content.map((item, index) => {
              const Component =
                {
                  Join,
                  Maintain,
                  Build
                }[item.id] ?? Join

              return (
                <Component
                  {...item}
                  index={index + 1}
                  key={JSON.stringify(item)}></Component>
              )
            })}
            <FloatMenu
              menuTitle={PageCommunityConfig.menuTitle}
              menu={PageCommunityConfig.content}></FloatMenu>
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PageCommunity
