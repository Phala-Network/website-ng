import React from 'react'
import styles from './index.module.scss'
import Partner from './Partner'

const PartnerRow = (props) => {
  const { from, to } = props
  const doms = []

  for (let i = from; i < to; i++) {
    doms.push(<Partner key={i} index={i}></Partner>)
  }

  return <div className={styles.partnerRow}>{doms}</div>
}

export default PartnerRow
