import { Link } from 'gatsby'
import { isString } from '../../utils/isString'
import { useLocale } from '../../hooks/useLocale'
import React from 'react'

type Props = {
  className?: string
  href?: string | { [key: string]: string }
}

const TagA: React.FC<Props> = (props) => {
  const locale = useLocale()
  let { className, children, href } = props

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

  if (JumpOut) {
    return (
      <a href={href as string} className={className} {...aProps}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href as string} className={className} {...aProps}>
      {children}
    </Link>
  )
}

export default TagA
