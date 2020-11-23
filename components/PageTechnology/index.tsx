import React from 'react'
import { TechWhitepaperConfig } from '../../config'
import { DiscordConfig } from '../../config/DiscordConfig'
import { GithubConfig } from '../../config/GithubConfig'
import { PageTechnologyConfig } from '../../config/PageTechnology'
import { WikiConfig } from '../../config/WikiConfig'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'

type Props = {}

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
        </div>
      </NormalLayout>
    </>
  )
}

export default PageTechnology
