import React from 'react'
import { PageMinerConfig } from '../../config/PageMiner'
import NormalLayout from '../NormalLayout'
import styles from './index.module.scss'
import DetailPageHeader from '../DetailPageHeader'
import PageTitle from '../PageTitle'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import DetailPageButton from '../DetailPageButton'
import { WikiConfig } from '../../config/WikiConfig'
import { EconomyWhitepaperConfig } from '../../config/EconomyWhitepaperConfig'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='矿工' en='Miner'></PageTitle>

      <NormalLayout className={styles.pageMiner}>
        <div className='container'>
          <DetailPageHeader {...PageMinerConfig}></DetailPageHeader>

          <DetailPageHeaderButtons>
            <DetailPageButton
              type='link'
              href={'https://wiki.phala.network/en-us/docs/poc3/'}
              text={{
                en: 'Mining Tutorial',
                zh: '挖坑教程',
              }}
            />

            <DetailPageButton
              type='link'
              href={WikiConfig.href}
              text={WikiConfig.name}
            />

            <DetailPageButton
              type='link'
              href={EconomyWhitepaperConfig.href}
              text={EconomyWhitepaperConfig.name}
            />
          </DetailPageHeaderButtons>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageMiner
