import Partner from './Partner'
import React from 'react'
import * as styles from './index.module.scss'

const PartnerRow = (props) => {
  const { from, to } = props
  const doms = []

  for (let i = from; i <= to; i++) {
    doms.push(<Partner key={i} index={i}></Partner>)
  }

  return <div className={styles.partnerRow}>{doms}</div>
}

export default PartnerRow
