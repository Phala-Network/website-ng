import { Map } from './Map'
import { PhalaAppConfig } from '../../../config'
import { StaticsList } from './StaticsList'
import { WikiConfig } from '../../../config/WikiConfig'
import Button from '../../Button'
import I18n from '../../I18n'
import React, { FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

//  Monday, October 31, 2022 12:00:00 PM GMT
//  Monday, October 31, 2022 20:00:00 PM GMT +08:00
const SALE_BEGIN_TIME_TS = 1667217600

const useRemainsTime = () => {
  const [remainsTime, setRemainsTime] = useState<number[]>([])
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Math.floor(Date.now() / 1000)
      if (now > SALE_BEGIN_TIME_TS) {
        setRemainsTime([])
        clearTimeout(timer)
      } else {
        const remains = SALE_BEGIN_TIME_TS - now
        const days = Math.floor(remains / 86400)
        const hours = Math.floor((remains % 86400) / 3600)
        const minutes = Math.floor((remains % 3600) / 60)
        const seconds = remains % 60
        setRemainsTime([days, hours, minutes, seconds])
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [setRemainsTime])
  return remainsTime
}

const CountdownPart: FC<{ number: number, unit: string }> = ({ number, unit }) => {
  if (number === null || number === undefined || number < 0) {
    return null
  }
  const numberStr = number.toString().padStart(2, '0')
  return (
    <div
      // tw="flex flex-col gap-1.5 items-center text-white"
    >
      <div>{numberStr}</div>
      <div>{unit}</div>
    </div>
  )
}

const PWSellCountdown = () => {
  const remainsTime = useRemainsTime()
  if (remainsTime.length === 0) {
    return null
  }
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <img src="/images/indexPage/pw-event.jpg" />
        <div className={styles.countdown}>
          <CountdownPart number={remainsTime[0]} unit="days" />
          <CountdownPart number={remainsTime[1]} unit="hours" />
          <CountdownPart number={remainsTime[2]} unit="minutes" />
          <CountdownPart number={remainsTime[3]} unit="seconds" />
        </div>
      </div>
    </div>
  )
}

const FirstScreen: FC = () => {
  const title = {
    en: ['COMPUTATION', 'FOR WEB3'],
    zh: ['Web3.0 计算协议']
  }

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={styles.bg}></div>
      <PWSellCountdown />
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          <I18n
            render={(str: string | string[]) => (
              <div key={str.toString()}>{str}</div>
            )}
            {...title}
          />
        </div>
        <div className={styles.description}>
          <I18n
            en="Privacy-Enhanced Permissionless Computing Protocol"
            zh="隐私增强、无需许可的自治计算网络"
          />
        </div>
        <div className={styles.buttons}>
          <Button
            text={PhalaAppConfig.name}
            href={PhalaAppConfig.href}
            className={styles.button}
            type="link"
            color="primary"></Button>
          <Button
            text={WikiConfig.name}
            href={WikiConfig.href}
            className={styles.button}
            hasArrowIcon
            type="link"
            color="gray"></Button>
        </div>

        <StaticsList></StaticsList>
      </div>

      <Map></Map>
    </section>
  )
}

export default FirstScreen
