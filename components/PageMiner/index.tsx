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
              className={styles.btn1}
              type='link'
              href={'https://wiki.phala.network/en-us/docs/poc3/'}
              text={{
                en: 'Mining Pool Protocol',
                zh: '矿池协议',
              }}
            />

            <DetailPageButton
              className={styles.btn2}
              type='link'
              href={'https://wiki.phala.network/en-us/docs/poc3/'}
              text={{
                en: 'Mining Tutorial',
                zh: '挖坑教程',
              }}
            />

            <DetailPageButton
              className={styles.btn3}
              type='link'
              {...WikiConfig}
            />

            <DetailPageButton
              className={styles.btn4}
              type='link'
              {...EconomyWhitepaperConfig}
            />
          </DetailPageHeaderButtons>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageMiner
