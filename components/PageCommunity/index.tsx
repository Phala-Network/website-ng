import React from 'react'
import { PageCommunityConfig } from '../../config/PageCommunity'
import DetailPageHeader from '../DetailPageHeader'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'
import Join from './Join'
import Maintain from './Maintain'
import Build from './Build'
import BgLayer from '../BgLayer'

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
                  Build,
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
