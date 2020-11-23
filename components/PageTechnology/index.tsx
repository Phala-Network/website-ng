import React from 'react'
import { PageTechnologyConfig } from '../../config/PageTechnology'
import DetailPageHeader from '../DetailPageHeader'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'

type Props = {}

const PageTechnology: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='技术' en='Technology'></PageTitle>
      <NormalLayout>
        <div className={styles.pageTechnology}>
          <div className='container'>
            <DetailPageHeader {...PageTechnologyConfig}></DetailPageHeader>
          </div>
        </div>
      </NormalLayout>
    </>
  )
}

export default PageTechnology
