import React from 'react'
import { PageCommunityConfig } from '../../config/PageCommunity'
import DetailPageHeader from '../DetailPageHeader'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'

type Props = {}

const PageCommunity: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='社区' en='Community'></PageTitle>
      <NormalLayout className={styles.pageCommunity}>
        <div className='container'>
          <DetailPageHeader {...PageCommunityConfig}></DetailPageHeader>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageCommunity
