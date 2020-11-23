import React from 'react'
import { PageAboutUsConfig } from '../../config/PageAboutUs'
import DetailPageHeader from '../DetailPageHeader'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'

type Props = {}

const PageAboutUs: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='社区' en='AboutUs'></PageTitle>
      <NormalLayout className={styles.pageAboutUs}>
        <div className='container'>
          <DetailPageHeader {...PageAboutUsConfig}></DetailPageHeader>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageAboutUs
