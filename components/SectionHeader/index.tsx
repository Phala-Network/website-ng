import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import I18n from '../I18n'
import styles from './index.module.scss'
import classnames from 'classnames'

export type SectionHeaderProps = {
  title: {
    [key: string]: string | string[]
  }
  description?: {
    [key: string]: string | string[]
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
  const [localeTitle, setLocalTitle] = useState<string | string[]>('')
  const [localeDescription, setLocalDescription] = useState<string | string[]>(
    ''
  )

  useEffect(() => {
    setLocalTitle(title[locale])

    if (description) {
      setLocalDescription(description[locale])
    }
  }, [locale, title, description])

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
          {Array.isArray(localeDescription)
            ? localeDescription.map((str) => {
                return <div key={str}>{str}</div>
              })
            : localeDescription}
        </div>
      )}
    </div>
  )
}

export default SectionHeader
