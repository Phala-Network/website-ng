import * as styles from './index.module.scss'
import React from 'react'
import EnRoadMap from './EnRoadMap'
import CnRoadMap from './CnRoadMap'
import { useLocale } from '../../hooks/useLocale'

export default function PageRoadMap() {
  const locale = useLocale()
  
  return (
    <div className={styles.container}>
      {locale === 'en' ? <EnRoadMap /> : <CnRoadMap />}
    </div>
  )
}
