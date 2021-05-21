import { Link } from 'gatsby'
import { isString } from '../../utils/isString'
import { useLocale } from '../../hooks/useLocale'
import IconArrow from '../IconArrow'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

export type ButtonProps = {
  color?: 'white' | 'black' | 'gray' | 'primary'
  hasArrowIcon?: boolean
  style?: React.CSSProperties
  type?: 'button' | 'link'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  uppercase?: boolean
  href?: string | { [key: string]: string }
  text?: string | { [key: string]: string }
  className?: string
  size?: 'default' | 'middle'
}

const Button: React.FC<ButtonProps> = (props) => {
  const locale = useLocale()

  let {
    size,
    className,
    uppercase = true,
    hasArrowIcon = false,
    color = 'black',
    type = 'button',
    href,
    children,
    style,
    text,
    onClick
  } = props
  const isLink = type === 'link'
  const elementType = isLink ? 'span' : 'button'

  const buttonProps: React.HTMLAttributes<HTMLButtonElement> = {
    onClick,
    style,
    className: classnames([
      className,
      styles.button,
      styles[color],
      styles[size],
      { [styles.uppercase]: uppercase }
    ])
  }

  href = !isString(href) ? href[locale] : href
  const JumpOut = href?.toString()?.indexOf?.('http') !== -1

  if (!JumpOut) {
    href = '/' + locale + href
  }

  if (isLink && href) {
    if (JumpOut) {
      Object.assign(buttonProps, {
        target: '_blank'
      })
    }
  }

  const el = React.createElement(
    elementType,
    buttonProps,
    children,
    <>{text && (isString(text) ? text : text[locale])}</>,
    hasArrowIcon && <IconArrow className={styles.iconArrow} />
  )

  if (isLink && href) {
    if (JumpOut) {
      return (
        <a href={href as string} target="_blank" rel="noreferrer">{el}</a>
      )
    } else {
      return (
        <Link to={href as string}>{el}</Link>
      )
    }
  } else {
    return el
  }
}

export default Button
