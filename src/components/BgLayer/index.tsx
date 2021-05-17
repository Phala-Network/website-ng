import React, { useEffect, useState } from 'react'
import * as styles from './index.module.scss'

type Props = {
  backgroundUrl: string
}

const BgLayer: React.FC<Props> = (props) => {
  const { children, backgroundUrl } = props
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const checkPosition = function () {
      const o = 1 - window.pageYOffset / 1000

      setOpacity(o < 0 ? 0 : o)
    }

    window.addEventListener('scroll', checkPosition)

    return () => {
      window.removeEventListener('scroll', checkPosition)
    }
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`
      }}
      className={styles.bgLayer}>
      <div
        style={{
          opacity,
          backgroundImage: `linear-gradient(
            90deg,
            rgba(25, 25, 25, 0.8) 0%,
            rgba(25, 25, 25, 0.2) 100%
          )`
        }}
        className={styles.mask}></div>
      {children}
    </div>
  )
}

export default BgLayer
