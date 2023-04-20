import { useLocale } from '../../hooks/useLocale'
import I18n from '../I18n'
import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  menuTitle?: { [key: string]: string }
  menu: {
    name: { [key: string]: string[] | string }
  }[]
  offsetBottom?: number
}

function offset (el) {
  const rect = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const FloatMenu: React.FC<Props> = (props) => {
  const { menuTitle, menu, offsetBottom = 300 } = props
  const locale = useLocale()
  const [fixed, setFixed] = useState(false)
  const [bottom, setBottom] = useState(false)
  const [done, setDone] = useState([])

  function checkName (name) {
    const localName = name[locale]
    return Array.isArray(localName) ? localName.join('_') : localName
  }

  useEffect(() => {
    function checkPosition () {
      const el = document.getElementById('floatMenu')
      const contentEl = document.getElementById('content')
      const winHeight = window.innerHeight

      if (!el || !contentEl) return

      const elRect = el.getBoundingClientRect()
      const contentElRect = contentEl.getBoundingClientRect()

      // check top, stop it
      if (offset(el).top - 150 < offset(contentEl).top) {
        setFixed(false)
        return
      }

      // move move move
      if (elRect.bottom < winHeight - offsetBottom) {
        setFixed(true)
      }

      // check bottom, stop it
      if (contentElRect.bottom < winHeight - offsetBottom) {
        setBottom(true)
      } else {
        setBottom(false)
      }

      setDone(
        menu.map((item) => {
          const el = document.getElementById(checkName(item.name))

          if (!el) return false

          const rect = el.getBoundingClientRect()

          return rect.top < 200
        })
      )
    }

    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', checkPosition)

    // wait page render finished
    setTimeout(() => {
      checkPosition()
    }, 500)

    return () => {
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
    }
  }, [locale])

  function addI18nSpaces (langItems: { [locale: string]: string[] | string }) {
    if (Array.isArray(langItems.en)) {
      return {
        ...langItems,
        en: langItems.en.join(' ')
      }
    }

    return langItems
  }

  return (
    <div
      id="floatMenu"
      className={classnames([
        styles.floatMenu,
        {
          [styles.fixed]: fixed
        },
        {
          [styles.bottom]: bottom
        }
      ])}>
      <div className={styles.title}>
        <I18n {...menuTitle}></I18n>
      </div>
      <div className={styles.menu}>
        {menu.map((item, index) => {
          return (
            <a
              key={JSON.stringify(item.name)}
              href={`#title_${checkName(item.name)}`}
              className={classnames([
                styles.item,
                {
                  [styles.done]: done[index]
                }
              ])}>
              <div className={styles.index}>0{index + 1}</div>
              <div>
                <I18n {...addI18nSpaces(item.name)}></I18n>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default FloatMenu
