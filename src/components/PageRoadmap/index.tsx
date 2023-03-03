import './index.module.scss'
import React from 'react'
import EnRoadMap from './EnRoadMap'
import CnRoadMap from './CnRoadMap'
import { useLocale } from '../../hooks/useLocale'

export default function PageRoadMap() {
  const locale = useLocale()

  return (
    <div
      className="container roadmap_FDSFS"
      style={{
        padding: '32px 24px'
      }}>
      {locale === 'en' ? <EnRoadMap /> : <CnRoadMap />}
    </div>
  )
}
