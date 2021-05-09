import { Link } from 'gatsby'
import { locales } from '../../config/locales'
import { useLocale } from '../../hooks/useLocale'
import { useLocation } from '@reach/router'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {}

const pathJoin = (parts: string[], sep = '/') => {
  const separator = sep || '/'
  const replace = new RegExp(separator + '{1,}', 'g')
  return parts.join(separator).replace(replace, separator)
}

const LangSwitch: React.FC<Props> = () => {
  const locale = useLocale()
  const location = useLocation()

  const url = location.pathname
  const splitedUrl = url.split('/')
  splitedUrl.splice(1, 1)

  const route = splitedUrl.join('/')
  const isHomePage = route === '/' || route === ''

  return (
    <div className={styles.langSwitch}>
      {locales.map((lang) => {
        return (
          <Link
            key={lang}
            to={isHomePage ? `/${lang}` : pathJoin(['/', lang, route])}
          >
            <a
              className={classnames([
                styles.item,
                {
                  [styles.active]: lang === locale
                }
              ])}>
              {lang}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default LangSwitch
