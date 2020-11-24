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

type Props = {}

const PagePHA: React.FC<Props> = () => {
  return (
    <>
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
            <FloatMenu
              menuTitle={PagePHAConfig.menuTitle}
              menu={PagePHAConfig.content}></FloatMenu>
          </div>
        </div>
      </NormalLayout>
    </>
  )
}

export default PagePHA
