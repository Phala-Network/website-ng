import React from 'react'
import styles from './index.module.scss'

type Props = {}

const LangSwitch: React.FC<Props> = () => {
  const langs = ['EN', 'CN']

  return (
    <div className={styles.langSwitch}>
      {langs.map((lang) => {
        return (
          <div key={lang} className={styles.item}>
            {lang}
          </div>
        )
      })}
    </div>
  )
}

export default LangSwitch
