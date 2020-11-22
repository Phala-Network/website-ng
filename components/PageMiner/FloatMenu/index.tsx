import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {}

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const FloatMenu: React.FC<Props> = () => {
  const [fixed, setFixed] = useState(false)
  const [bottom, setBottom] = useState(false)

  useEffect(() => {
    function onScroll() {
      const el = document.getElementById('floatMenu')
      const contentEl = document.getElementById('content')
      const elRect = el.getBoundingClientRect()
      const contentElRect = contentEl.getBoundingClientRect()

      if (offset(el).top - 150 < offset(contentEl).top) {
        setFixed(false)
        setBottom(false)
        return
      }

      if (elRect.bottom < window.innerHeight - 40) {
        setFixed(true)
        setBottom(false)
      }

      if (
        contentElRect.height + offset(contentEl).top <=
        elRect.height + offset(el).top
      ) {
        setFixed(false)
        setBottom(true)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

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
      index
      {fixed}
    </div>
  )
}

export default FloatMenu
