import classnames from 'classnames'
import IconArrow from '../IconArrow'
import React from 'react'
import styles from './index.module.scss'

type Props = {
  color?: 'white' | 'black' | 'primary'
  hasArrowIcon?: boolean
  style?: React.CSSProperties
  type?: 'button' | 'link'
  onClick?: Function
  uppercase?: boolean
}

const Button: React.FC<Props> = (props) => {
  const {
    uppercase = true,
    hasArrowIcon = false,
    color = 'black',
    type = 'button',
    children,
    style,
    onClick,
  } = props
  const elementType = type === 'link' ? 'a' : 'button'

  return React.createElement(
    elementType,
    {
      onClick,
      style,
      className: classnames([
        styles.button,
        styles[color],
        { [styles.uppercase]: uppercase },
      ]),
    },
    children,
    hasArrowIcon && <IconArrow className={styles.iconArrow} />
  )
}

export default Button
