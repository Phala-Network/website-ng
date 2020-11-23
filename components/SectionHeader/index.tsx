import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../I18n'
import styles from './index.module.scss'
import classnames from 'classnames'

export type SectionHeaderProps = {
  title: {
    [key: string]: string | string[]
  }
  description?: {
    [key: string]: string
  }
  color?: 'black' | 'gray'
  className?: string
  descriptionClassName?: string
  titleClassName?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const {
    descriptionClassName,
    titleClassName,
    title,
    description,
    color = 'black',
    className,
  } = props
  const { locale } = useRouter()
  const localeTitle = title[locale]

  return (
    <div
      className={classnames([styles.sectionHeader, styles[color], className])}>
      <div className={classnames([styles.title, titleClassName])}>
        {Array.isArray(localeTitle)
          ? localeTitle.map((str) => {
              return <div key={str}>{str}</div>
            })
          : localeTitle}
      </div>
      {description && (
        <div className={classnames([styles.description, descriptionClassName])}>
          <I18n {...description}></I18n>
        </div>
      )}
    </div>
  )
}

export default SectionHeader
