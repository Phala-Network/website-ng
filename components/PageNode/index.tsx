import React from 'react'
import { EconomyWhitepaperConfig } from '../../config/EconomyWhitepaperConfig'
import { PageNodeConfig } from '../../config/PageNode'
import { WikiConfig } from '../../config/WikiConfig'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import Card from './Card'
import styles from './index.module.scss'

type Props = {}

const PageNode: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='节点' en='Node'></PageTitle>

      <NormalLayout className={styles.pageNode}>
        <div className='container'>
          <DetailPageHeader {...PageNodeConfig}></DetailPageHeader>
          <DetailPageHeaderButtons>
            <DetailPageButton
              type='link'
              className={styles.btn1}
              href={EconomyWhitepaperConfig.href}
              text={EconomyWhitepaperConfig.name}
            />

            <DetailPageButton
              className={styles.btn3}
              text={{
                en: 'Wechat Group',
                zh: '微信群',
              }}
            />

            <DetailPageButton
              type='link'
              className={styles.btn2}
              href={WikiConfig.href}
              text={WikiConfig.name}
            />
          </DetailPageHeaderButtons>

          <div id='content' className={styles.content}>
            {PageNodeConfig.content.map((item, index) => {
              return (
                <Card
                  key={JSON.stringify(item.name)}
                  {...item}
                  content={item.content}
                  index={index + 1}
                  bgIndex={index + 1}></Card>
              )
            })}

            <FloatMenu
              menuTitle={PageNodeConfig.menuTitle}
              menu={PageNodeConfig.content}></FloatMenu>
          </div>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageNode
