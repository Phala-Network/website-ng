import { Statics } from '../Statics'
import React, { FC, useCallback, useEffect, useState } from 'react'
import * as styles from './index.module.scss'

export const StaticsList: FC = () => {
  const [cpu, setCpu] = useState(0)
  const [workers, setWorkers] = useState(0)

  const getData = useCallback(
    async function () {
      try {
        const workerRes = await fetch(
          'https://mb.phala.network/api/public/card/9a646ed7-573a-4980-a5a8-8847bbbc8a4e/query'
        )
        const { data: workerData } = await workerRes.json()
        const worker = workerData.rows[0][0]

        const vcpuRes = await fetch(
          'https://mb.phala.network/api/public/card/be760709-8708-4c2b-a79f-0365b9b9382e/query'
        )
        const { data: vcpuData } = await vcpuRes.json()
        const vCPU = vcpuData.rows[0][0]

        setCpu(vCPU)
        setWorkers(worker)
      } catch (err) {
        console.error(err)
        setCpu(123326)
        setWorkers(30625)
      }
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
          <Statics name="Worker" value={workers}></Statics>
          <Statics name="vCPU" value={cpu}></Statics>
          <Statics name="City" value={50} addPlus></Statics>
        </>
      )}
    </div>
  )
}
