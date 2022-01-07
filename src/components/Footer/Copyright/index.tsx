import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const Copyright: React.FC<Props> = () => {
  // TODO: zh

  return (
    <div className={styles.copyright}>
      <div>COPYRIGHT © 2022 PHALA.LTD ALL RIGHTS RESERVED. </div>
      <div>May Phala be with you!</div>
    </div>
  )
}

export default Copyright
