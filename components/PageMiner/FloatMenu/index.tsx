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
    function checkPosition() {
      const el = document.getElementById('floatMenu')
      const contentEl = document.getElementById('content')
      const elRect = el.getBoundingClientRect()
      const contentElRect = contentEl.getBoundingClientRect()

      // check top, stop it
      if (offset(el).top - 150 < offset(contentEl).top) {
        setFixed(false)
        return
      }

      // move move move
      if (elRect.bottom < window.innerHeight - 40) {
        setFixed(true)
      }

      // check bottom, stop it
      if (contentElRect.bottom < window.innerHeight - 40) {
        setBottom(true)
      } else {
        setBottom(false)
      }
    }

    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', checkPosition)

    checkPosition()

    return () => {
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
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
