import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {
  className?: string
  color?: string
}

const IconArrow: React.FC<Props> = (props) => {
  const { className, color = '#0A0A0A' } = props

  return (
    <div className={classnames([styles.iconArrow, className])}>
      <svg
        width='31'
        height='30'
        viewBox='0 0 31 30'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          className={className}
          d='M2.9152 15.6564L27.0819 15.6564'
          stroke='#0A0A0A'
          strokeWidth={2}
          strokeLinecap='square'
        />
        <path
          className={className}
          d='M21.4705 22.0306L27.8013 15.6222'
          stroke='#0A0A0A'
          strokeWidth={2}
          strokeLinecap='square'
        />
        <path
          className={className}
          d='M27.6429 15.4542L21.2738 9.0814'
          stroke='#0A0A0A'
          strokeWidth={2}
          strokeLinecap='square'
        />
      </svg>
    </div>
  )
}

export default IconArrow
