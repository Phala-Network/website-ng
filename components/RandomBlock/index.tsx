import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {
  row?: number
  column?: number
}

const RandomBlock: React.FC<Props> = (props) => {
  const { row = 8, column = 4 } = props
  const size = 20
  let data = new Array(row * column).fill(0)
  data = data.map(() => {
    return Math.random()
  })

  return (
    <div
      style={{
        width: size * column,
        height: size * row,
      }}
      className={styles.randomBlock}>
      {data.map((item) => {
        console.log('item', item > 0.5)

        return (
          <div
            style={{
              width: size,
              height: size,
            }}
            key={item}
            className={classnames({
              [styles.color]: item > 0.8,
            })}></div>
        )
      })}
    </div>
  )
}

export default RandomBlock
