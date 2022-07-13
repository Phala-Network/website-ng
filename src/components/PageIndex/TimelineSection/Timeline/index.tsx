import { TimelineSectionConfig } from '../../../../config/PageIndexConfig/TimelineSectionConfig'
import { useBreakpoint } from '../../../../hooks/useBreakpoint'
import Buttons from '../Buttons'
import Item from '../Item'
import React, { useEffect, useState } from 'react'
import SectionHeader from '../../../SectionHeader'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {}

const { timeline, doneTitle, doingTitle } = TimelineSectionConfig

const INDEX_ARR = [0, 3, 5, 7, 10]
const FIRSTINDEX = INDEX_ARR[0]
const LAST_INDEX = INDEX_ARR[INDEX_ARR.length - 1]

const Timeline: React.FC<Props> = () => {
  // const [slideNumber, setSlideNumber] = useState(3)
  const [index, setIndex] = useState(0)
  const [bgColor, setBgColor] = useState<'primary' | 'gray'>('primary')
  const allTimelineData = [...timeline.done, ...timeline.doing]
  // const allTimelineDataLength = allTimelineData.length
  // const maxIndex = allTimelineData.length - slideNumber
  const { breakpoint } = useBreakpoint()

  console.log('*** breakpoint', breakpoint)

  // function isLast() {
  //   return index >= maxIndex
  // }

  function lastIndex() {
    return index === LAST_INDEX
  }

  function onRightButtonClick() {
    if (index === LAST_INDEX) return

    const nextIndex = INDEX_ARR[INDEX_ARR.indexOf(index) + 1]

    setIndex(nextIndex)

    // if (lastIndex()) return

    // if (isLast()) {
    //   setIndex(index + 1)
    // } else {
    //   setIndex(index + slideNumber)
    // }
  }

  function onLeftButtonClick() {
    if (index === FIRSTINDEX) return

    const nextIndex = INDEX_ARR[INDEX_ARR.indexOf(index) - 1]

    setIndex(nextIndex)

    // if (index === 0) return

    // if (lastIndex()) {
    //   setIndex(index - 1)
    // } else {
    //   setIndex(index - slideNumber)
    // }
  }

  useEffect(() => {
    if (index === LAST_INDEX) {
      setBgColor('gray')
    } else {
      setBgColor('primary')
    }
  }, [index])

  // useEffect(() => {
  //   if (breakpoint === 'mobile') {
  //     setBgColor('primary')
  //     setIndex(0)
  //   } else if (breakpoint === 'tablet') {
  //     setSlideNumber(2)
  //   } else {
  //     setSlideNumber(3)
  //   }
  // }, [breakpoint])

  return (
    <div className={classnames([styles.timelineWrap, styles[bgColor]])}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader title={lastIndex() ? doingTitle : doneTitle} />

          <Buttons
            onLeftButtonClick={onLeftButtonClick}
            onRightButtonClick={onRightButtonClick}
          />
        </div>

        <div className={styles.timeline}>
          <div
            style={{
              transform: `translate3d(${index * -367}px, 0, 0)`
            }}
            className={styles.timelineInner}>
            {allTimelineData.map((item) => {
              return <Item key={JSON.stringify(item.content)} {...item} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
