import React from 'react'
import { TechWhitepaperConfig } from '../../config'
import { DiscordConfig } from '../../config/DiscordConfig'
import { GithubConfig } from '../../config/GithubConfig'
import { PageTechnologyConfig } from '../../config/PageTechnology'
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

const config = {
  content: [
    {
      name: {
        en: ['TEE Computing', 'Environment'],
        zh: ['TEE Computing', 'Environment'],
      },
      content: {},
    },
    {
      name: {
        en: ['Three-party', 'trusted', 'communication'],
        zh: ['Three-party', 'trusted', 'communication'],
      },
      content: {},
    },
    {
      name: {
        en: ['Separation of', 'consensus and', 'computing layer'],
        zh: ['Separation of', 'consensus and', 'computing layer'],
      },
      content: {},
    },
    {
      name: {
        en: ['The composability of cross-chain and secret contracts'],
        zh: ['The composability of cross-chain and secret contracts'],
      },
      content: {},
    },
    {
      name: {
        en: ['Applicable', 'scenarios'],
        zh: ['Applicable', 'scenarios'],
      },
      content: {},
    },
    {
      name: {
        en: ['How to use'],
        zh: ['How to use'],
      },
      content: {},
    },
  ],
}

const PageTechnology: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='技术' en='Technology'></PageTitle>
      <NormalLayout className={styles.pageTechnology}>
        <div className='container'>
          <DetailPageHeader {...PageTechnologyConfig}></DetailPageHeader>

          <DetailPageHeaderButtons>
            <DetailPageButton
              className={styles.btn1}
              {...TechWhitepaperConfig}
            />
            <DetailPageButton className={styles.btn2} {...GithubConfig} />
            <DetailPageButton className={styles.btn3} {...WikiConfig} />
            <DetailPageButton className={styles.btn4} {...DiscordConfig} />
          </DetailPageHeaderButtons>

          <div id='content' className={styles.content}>
            {config.content.map((item, index) => {
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
              menuTitle={{
                en: 'PHA',
                zh: 'PHA',
              }}
              menu={config.content}
            />
          </div>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageTechnology
