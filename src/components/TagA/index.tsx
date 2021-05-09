import { Link } from 'gatsby'
import { isString } from '../../utils/isString'
import { useLocale } from '../../hooks/useLocale'
import React from 'react'

type Props = {
  justLink?: boolean
  className?: string
  href?: string | { [key: string]: string }
}

const TagA: React.FC<Props> = (props) => {
  const locale = useLocale()
  let { className, children, href, justLink = false } = props

  if (!href) {
    return <a className={className}>{children}</a>
  }

  if (!isString(href)) {
    href = href[locale]
  }

  const JumpOut = href?.toString()?.indexOf?.('http') !== -1

  if (!JumpOut) {
    href = '/' + locale + href
  }

  const aProps = {
    target: JumpOut ? '_blank' : '_self'
  }

  if (!justLink) {
    children = (
      <a className={className} {...aProps}>
        {children}
      </a>
    )
  }

  if (JumpOut) {
    return (
      <a href={href as string}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href as string}>
      {children}
    </Link>
  )
}

export default TagA
