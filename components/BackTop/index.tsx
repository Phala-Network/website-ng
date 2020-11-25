import { useState, useEffect } from 'react'
import styles from './index.module.scss'
import smoothscroll from 'smoothscroll-polyfill'

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
    visibilityHeight = window?.innerHeight * (2 / 3),
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
          {/* TODO: icon */}
          TOP
        </div>
      )}
    </>
  )
}

export default BackTop
