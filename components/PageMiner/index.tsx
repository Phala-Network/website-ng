import React from 'react'
import { PageMinerConfig } from '../../config/PageMiner'
import NormalLayout from '../NormalLayout'
import styles from './index.module.scss'
import DetailPageHeader from '../DetailPageHeader'
import PageTitle from '../PageTitle'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='矿工' en='Miner'></PageTitle>

      <NormalLayout className={styles.pageMiner}>
        <div className='container'>
          <DetailPageHeader {...PageMinerConfig}></DetailPageHeader>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageMiner
