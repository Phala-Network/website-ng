import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

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
