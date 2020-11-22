import React, { useEffect, useState } from 'react'
import SectionHeader from '../../../SectionHeader'
import styles from './index.module.scss'
import Item from '../Item'
import { TimelineSectionConfig } from '../../../../config/indexPage/TimelineSectionConfig'
import Buttons from '../Buttons'
import classnames from 'classnames'
import { useBreakpoint } from '../../../../hooks/useBreakpoint'

type Props = {}

const { timeline, doneTitle, doingTitle } = TimelineSectionConfig

const Timeline: React.FC<Props> = () => {
  const [slideNumber, setSlideNumber] = useState(3)
  const [index, setIndex] = useState(0)
  const [bgColor, setBgColor] = useState<'primary' | 'gray'>('primary')
  const allTimelineData = [...timeline.done, ...timeline.doing]
  const allTimelineDataLength = allTimelineData.length
  const maxIndex = allTimelineData.length - slideNumber
  const { breakpoint } = useBreakpoint()

  function isLast() {
    return index >= maxIndex
  }

  function onRightButtonClick() {
    if (index === allTimelineDataLength - 1) return

    if (isLast()) {
      setIndex(index + 2)
    } else {
      setIndex(index + slideNumber)
    }
  }

  function onLeftButtonClick() {
    if (index === 0) return

    if (index === allTimelineDataLength - 1) {
      setIndex(index - 2)
    } else {
      setIndex(index - slideNumber)
    }
  }

  useEffect(() => {
    if (isLast()) {
      setBgColor('gray')
    } else {
      setBgColor('primary')
    }
  }, [index])

  useEffect(() => {
    if (breakpoint === 'mobile') {
      setBgColor('primary')
      setIndex(0)
    } else if (breakpoint === 'tablet') {
      setSlideNumber(2)
    } else {
      setSlideNumber(3)
    }
  }, [breakpoint])

  return (
    <div className={classnames([styles.timelineWrap, styles[bgColor]])}>
      <div className='container'>
        <div className={styles.header}>
          <SectionHeader title={isLast() ? doingTitle : doneTitle} />

          <Buttons
            onLeftButtonClick={onLeftButtonClick}
            onRightButtonClick={onRightButtonClick}
          />
        </div>

        <div className={styles.timeline}>
          <div
            style={{
              transform: `translate3d(${index * -367}px, 0, 0)`,
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
