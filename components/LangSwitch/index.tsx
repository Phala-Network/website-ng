import { useRouter } from 'next/router'
import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import Link from 'next/link'

type Props = {}

const LangSwitch: React.FC<Props> = () => {
  const { locales, locale, route } = useRouter()

  return (
    <div className={styles.langSwitch}>
      {locales.map((lang) => {
        const isHomePage = route === '/'

        return (
          <Link
            scroll={false}
            key={lang}
            href={isHomePage ? `/${lang}` : route}
            locale={isHomePage ? false : lang}>
            <a
              className={classnames([
                styles.item,
                {
                  [styles.active]: lang === locale,
                },
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
