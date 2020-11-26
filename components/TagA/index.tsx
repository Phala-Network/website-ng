import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { isString } from '../../utils/isString'

type Props = React.PropsWithChildren<LinkProps> & {
  justLink?: boolean
  className?: string
}

const TagA: React.FC<Props> = (props) => {
  const { locale } = useRouter()
  let { className, children, href, justLink = false } = props

  if (!href) {
    return <a className={className}>{children}</a>
  }

  if (!isString(href)) {
    href = href[locale]
  }

  const JumpOut = href?.toString()?.indexOf?.('http') !== -1
  const aProps = {
    target: JumpOut ? '_blank' : '_self',
  }

  if (!justLink) {
    children = (
      <a className={className} {...aProps}>
        {children}
      </a>
    )
  }

  return (
    <Link passHref href={href}>
      {children}
    </Link>
  )
}

export default TagA
