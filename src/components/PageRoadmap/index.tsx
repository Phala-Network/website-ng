import './index.module.scss'
import { useLocale } from '../../hooks/useLocale'
import CnRoadMap from './CnRoadMap'
import EnRoadMap from './EnRoadMap'
import React from 'react'

export default function PageRoadMap () {
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
