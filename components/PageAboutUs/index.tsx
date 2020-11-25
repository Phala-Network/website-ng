import React from 'react'
import { PageAboutUsConfig } from '../../config/PageAboutUs'
import DetailPageHeader from '../DetailPageHeader'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'
import PhalaCore from './PhalaCore'
import Consultant from './Consultant'
import Contributor from './Contributor'
import CommunityBuilder from './CommunityBuilder'
import Partners from './Partners'

type Props = {}

const PageAboutUs: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='社区' en='AboutUs'></PageTitle>
      <NormalLayout className={styles.pageAboutUs}>
        <div className='container'>
          <div className={styles.header}>
            <DetailPageHeader {...PageAboutUsConfig}></DetailPageHeader>
          </div>

          <div id='content' className={styles.content}>
            {PageAboutUsConfig.content.map((item, index) => {
              const Component =
                {
                  PhalaCore,
                  Consultant,
                  Contributor,
                  CommunityBuilder,
                  Partners,
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
    </>
  )
}

export default PageAboutUs
