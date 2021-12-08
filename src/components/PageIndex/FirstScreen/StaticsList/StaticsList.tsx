import { Statics } from '../Statics'
import React, { FC, useCallback, useEffect, useState } from 'react'
import * as styles from './index.module.scss'

export const StaticsList: FC = () => {
  const [cpu, setCpu] = useState(0)
  const [workers, setWorkers] = useState(0)

  const getData = useCallback(
    async function () {
      const response = await fetch(
        'https://app-analytics-data.netlify.app/latest/daily.json'
      )
      const data = await response.json()

      setCpu(data.vCPU)
      setWorkers(data.workers)
    },
    [setCpu, setWorkers]
  )

  // date: "2021-09-29"
  // onlineWorkers: 5161
  // reward: 486178.03000000044
  // vCPU: 317702.1533333333
  // workers: 10555
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className={styles.StaticsList}>
      {workers > 0 && (
        <>
          <Statics name="Workers" value={workers}></Statics>
          <Statics name="vCPUs" value={cpu}></Statics>
          <Statics name="Cities" value={50} addPlus></Statics>
        </>
      )}
    </div>
  )
}
