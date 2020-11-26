import classnames from 'classnames'
import IconArrow from '../IconArrow'
import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { isString } from '../../utils/isString'
import Link from 'next/link'
import TagA from '../TagA'
import I18n from '../I18n'

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
  const { locale } = useRouter()

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
    onClick,
  } = props
  const isLink = type === 'link'
  const elementType = isLink ? 'a' : 'button'

  const buttonProps: React.HTMLAttributes<HTMLButtonElement> = {
    onClick,
    style,
    className: classnames([
      className,
      styles.button,
      styles[color],
      styles[size],
      { [styles.uppercase]: uppercase },
    ]),
  }

  if (isLink && href) {
    if (!isString(href)) {
      href = href[locale]
    }

    const JumpOut = href?.toString()?.indexOf?.('http') !== -1

    if (JumpOut) {
      Object.assign(buttonProps, {
        target: '_blank',
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
    return (
      <Link passHref href={href}>
        {el}
      </Link>
    )
  } else {
    return el
  }
}

export default Button
