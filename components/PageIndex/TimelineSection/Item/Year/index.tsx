import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  year: number
}

const Year: React.FC<Props> = (props) => {
  const { year } = props

  return (
    <div
      className={classnames([
        styles.year,
        styles[`y${year.toString()}`],
      ])}></div>
  )
}

export default Year
