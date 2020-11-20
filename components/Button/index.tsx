import classnames from 'classnames'
import IconArrow from '../IconArrow'
import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { isString } from '../../utils/isString'

type Props = {
  color?: 'white' | 'black' | 'gray' | 'primary'
  hasArrowIcon?: boolean
  style?: React.CSSProperties
  type?: 'button' | 'link'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  uppercase?: boolean
  href?: string | { [key: string]: string }
  text?: string | { [key: string]: string }
}

const Button: React.FC<Props> = (props) => {
  const { locale } = useRouter()

  const {
    uppercase = true,
    hasArrowIcon = false,
    color = 'black',
    type = 'button',
    href,
    children,
    style,
    text,
    onClick,
  } = props
  const isLink = type === 'link'
  const elementType = isLink ? 'a' : 'button'

  const buttonProps: React.HTMLAttributes<HTMLButtonElement> = {
    onClick,
    style,
    className: classnames([
      styles.button,
      styles[color],
      { [styles.uppercase]: uppercase },
    ]),
  }

  if (isLink) {
    Object.assign(buttonProps, {
      target: '_blank',
      href: isString(href) ? href : href[locale],
    })
  }

  return React.createElement(
    elementType,
    buttonProps,
    children,
    <>{text && (isString(text) ? text : text[locale])}</>,
    hasArrowIcon && <IconArrow className={styles.iconArrow} />
  )
}

export default Button
