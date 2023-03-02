import * as styles from './index.module.scss'
import React from 'react'
import EnRoadMap from './EnRoadMap'
import CnRoadMap from './CnRoadMap'

export default function PageRoadMap() {
  return (
    <div className={styles.container}>
      {/* <EnRoadMap /> */}
      <CnRoadMap />
    </div>
  )
}
