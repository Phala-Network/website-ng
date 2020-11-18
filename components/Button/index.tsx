import classnames from 'classnames'
import IconArrow from '../IconArrow'
import React from 'react'
import styles from './index.module.scss'

type Props = {
  color?: 'white' | 'black'
  style?: React.CSSProperties
  type?: 'button' | 'link'
  onClick?: Function
}

const Button: React.FC<Props> = (props) => {
  const { color = 'black', type = 'button', children, style, onClick } = props

  return React.createElement(
    type,
    {
      onClick,
      style,
      className: classnames([styles.button, styles[color]]),
    },
    children,
    <IconArrow className={styles.iconArrow} />
  )
}

export default Button
