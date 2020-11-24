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

const config = {}

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
            {PageTechnologyConfig.content.map((item, index) => {
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
              menuTitle={PageTechnologyConfig.menuTitle}
              menu={PageTechnologyConfig.content}
            />
          </div>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageTechnology
