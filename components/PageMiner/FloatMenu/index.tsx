import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'
import { useRouter } from 'next/router'

type Props = {
  menuTitle?: { [key: string]: string }
  menu: {
    name: { [key: string]: string[] }
  }[]
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const FloatMenu: React.FC<Props> = (props) => {
  const { menuTitle, menu } = props
  const { locale } = useRouter()
  const [fixed, setFixed] = useState(false)
  const [bottom, setBottom] = useState(false)
  const [done, setDone] = useState([])

  useEffect(() => {
    function checkPosition() {
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
      if (elRect.bottom < winHeight - 40) {
        setFixed(true)
      }

      // check bottom, stop it
      if (contentElRect.bottom < winHeight - 40) {
        setBottom(true)
      } else {
        setBottom(false)
      }

      setDone(
        menu.map((item) => {
          const el = document.getElementById(item.name[locale].join('_'))

          if (!el) return false

          const rect = el.getBoundingClientRect()

          return rect.top < winHeight
        })
      )
    }

    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', checkPosition)

    checkPosition()

    return () => {
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
    }
  }, [locale])

  return (
    <div
      id='floatMenu'
      className={classnames([
        styles.floatMenu,
        {
          [styles.fixed]: fixed,
        },
        {
          [styles.bottom]: bottom,
        },
      ])}>
      <div className={styles.title}>
        <I18n {...menuTitle}></I18n>
      </div>
      <div className={styles.menu}>
        {menu.map((item, index) => {
          return (
            <a
              key={JSON.stringify(item.name)}
              href={`#title_${item.name[locale].join('_')}`}
              className={classnames([
                styles.item,
                {
                  [styles.done]: done[index],
                },
              ])}>
              <div className={styles.index}>0{index + 1}</div>
              <div>
                <I18n {...item.name}></I18n>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default FloatMenu
