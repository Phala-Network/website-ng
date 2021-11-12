import React, { FC, useEffect, useRef } from 'react'
import * as styles from './index.module.scss'

export interface StaticsProps {
  name: string
  value: number
  addPlus?: boolean
}

export const Statics: FC<StaticsProps> = (props) => {
  const { name, value, addPlus = false } = props
  const number = useRef<number>(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setInterval(() => {
      if (ref.current) {
        number.current = number.current + value / 60
        if (number.current > value) {
          ref.current.innerText = value.toFixed(0) + (addPlus ? '+' : '')
        } else {
          ref.current.innerText = number.current.toFixed(0)
        }
      }
    }, 1000 / 30)
  }, [])

  return (
    <div className={styles.Statics}>
      <div className={styles.name}>{name}</div>
      <div className={styles.line}></div>
      <div className={styles.value} ref={ref}></div>
    </div>
  )
}
