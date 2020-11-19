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
        return (
          <Link
            scroll={false}
            key={lang}
            href={route === '/' ? `/${lang}` : route}
            locale={route === '/' ? false : lang}>
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
