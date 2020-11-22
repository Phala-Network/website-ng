import React from 'react'
import NormalLayout from '../NormalLayout'
import styles from './index.module.scss'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <NormalLayout>
      <div className={styles.pageMiner}></div>
    </NormalLayout>
  )
}

export default PageMiner
