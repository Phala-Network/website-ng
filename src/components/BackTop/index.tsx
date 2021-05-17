import * as React from 'react'

import { useEffect, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import * as styles from './index.module.scss'

type Props = {
  visibilityHeight?: number
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  style?: React.CSSProperties
}

const BackTop: React.FC<Props> = (props) => {
  const {
    onClick,
    style,
    visibilityHeight = window?.innerHeight * (2 / 3)
  } = props
  const [showScroll, setShowScroll] = useState(false)

  const scrollTop = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    onClick?.(e)
  }

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > visibilityHeight) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= visibilityHeight) {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    smoothscroll.polyfill()

    window.addEventListener('scroll', checkScrollTop)

    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [showScroll])

  return (
    <>
      {showScroll && (
        <div style={style} className={styles.backTop} onClick={scrollTop}>
          <svg width='50px' height='50px' viewBox='0 0 50 50' version='1.1'>
            <g
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              fillOpacity='0.75'>
              <g transform='translate(-225.000000, -800.000000)' fill='#676767'>
                <g transform='translate(225.000000, 800.000000)'>
                  <path d='M50,0 L50,50 L0,50 L0,0 L50,0 Z M25.5875,19.81 L9.18273281,36.2079813 L11.6951078,38.7110848 L25.586632,24.8229141 L39.4823777,38.7110848 L41.9922277,36.2079813 L25.5875,19.81 Z M42,12 L9,12 L9,15 L42,15 L42,12 Z'></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </>
  )
}

export default BackTop
