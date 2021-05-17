import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const DetailPageHeaderButtons: React.FC<Props> = (props) => {
  const { children } = props

  return <div className={styles.detailPageHeaderButtons}>{children}</div>
}

export default DetailPageHeaderButtons
