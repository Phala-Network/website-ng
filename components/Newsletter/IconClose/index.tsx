import React from 'react'
import styles from './index.module.scss'

type Props = React.HTMLAttributes<HTMLDivElement>

const IconClose: React.FC<Props> = (props) => {
  return (
    <div {...props} className={styles.iconClose}>
      <svg
        width='23'
        height='23'
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M6.19669 6.19657L16.8033 16.8032' stroke='black' />
        <path d='M16.8033 6.19657L6.1967 16.8032' stroke='black' />
      </svg>
    </div>
  )
}

export default IconClose
