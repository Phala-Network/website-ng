import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { useBreakpoint } from '../../hooks/useBreakpoint'

type Props = {
  row?: number
  column?: number
}

const RandomBlock: React.FC<Props> = (props) => {
  const { row = 8, column = 4 } = props
  const [size, setSize] = useState(20)
  const { breakpoint } = useBreakpoint()
  const [data, setData] = useState(new Array(row * column).fill(0))

  useEffect(() => {
    if (breakpoint === 'mobile') {
      setSize(10)
    } else if (breakpoint === 'tablet') {
      setSize(20)
    } else {
      setSize(30)
    }
  }, [breakpoint])

  useEffect(() => {
    setData(
      data.map(() => {
        return Math.random()
      })
    )
  }, [])

  return (
    <div
      style={{
        width: size * column,
        height: size * row,
      }}
      className={styles.randomBlock}>
      {data.map((item, index) => {
        return (
          <div
            style={{
              width: size,
              height: size,
            }}
            key={index}
            className={classnames({
              [styles.color]: item > 0.8,
            })}></div>
        )
      })}
    </div>
  )
}

export default RandomBlock
