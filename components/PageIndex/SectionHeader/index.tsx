import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../../I18n'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {
  title: {
    [key: string]: string | string[]
  }
  description?: {
    [key: string]: string
  }
  color?: 'black' | 'gray'
  className?: string
}

const SectionHeader: React.FC<Props> = (props) => {
  const { title, description, color = 'black', className } = props
  const { locale } = useRouter()
  const localeTitle = title[locale]

  return (
    <div
      className={classnames([styles.sectionHeader, styles[color], className])}>
      <div className={styles.title}>
        {Array.isArray(localeTitle)
          ? localeTitle.map((str) => {
              return <div key={str}>{str}</div>
            })
          : localeTitle}
      </div>
      <div className={styles.description}>
        <I18n {...description}></I18n>
      </div>
    </div>
  )
}

export default SectionHeader
