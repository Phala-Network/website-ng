import React from 'react'
import { PagePHAConfig } from '../../config/PagePHA'
import DetailPageHeader from '../DetailPageHeader'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'

type Props = {}

const PagePHA: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='PHA' en='PHA'></PageTitle>
      <NormalLayout>
        <div className={styles.pagePHA}>
          <div className='container'>
            <DetailPageHeader {...PagePHAConfig}></DetailPageHeader>
          </div>
        </div>
      </NormalLayout>
    </>
  )
}

export default PagePHA
