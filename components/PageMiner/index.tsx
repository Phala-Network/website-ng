import React from 'react'
import { PageMinerConfig } from '../../config/PageMiner'
import NormalLayout from '../NormalLayout'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <NormalLayout>
      <div className={styles.pageMiner}>
        <div className='container'>
          <div className={styles.header}>
            <SectionHeader
              {...PageMinerConfig}
              color='gray'
              titleClassName={styles.title}
              descriptionClassName={styles.description}></SectionHeader>
          </div>
        </div>
      </div>
    </NormalLayout>
  )
}

export default PageMiner
