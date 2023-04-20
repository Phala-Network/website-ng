import { Svg } from './Svg'
import React, { FC, memo, useEffect } from 'react'
import * as styles from './index.module.scss'

const C: FC = () => {
  useEffect(() => {
    const main = function () {
      const map = document.getElementById('map')

      if (map) {
        Array.from(map.getElementsByTagName('path')).forEach((item) => {
          if (Math.random() < 0.06 || item.style.fill === '#CDFA50') {
            item.style.fill = '#CDFA50'
          } else {
            item.style.fill = '#3D3D3D'
          }
        })
      }
    }

    main()

    const id = setInterval(() => {
      main()
    }, 1100)

    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.Map} id={'map'}>
      <Svg></Svg>
    </div>
  )
}

export const Map = memo(C)
