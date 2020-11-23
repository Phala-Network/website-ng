import React from 'react'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'

type Props = {}

const PageNode: React.FC<Props> = () => {
  return (
    <>
      <PageTitle zh='节点' en='Node'></PageTitle>

      <NormalLayout>
        <div className={styles.pageNode}>index</div>
      </NormalLayout>
    </>
  )
}

export default PageNode
