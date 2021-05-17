import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  className?: string
}

const Line: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={classnames([styles.line, className])}>
      <div className={styles.o}></div>
      <div className={styles.l}></div>
    </div>
  )
}

export default Line
