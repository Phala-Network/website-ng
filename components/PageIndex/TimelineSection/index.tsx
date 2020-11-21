import React, { useEffect, useState } from 'react'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'
import Item from './Item'
import { TimelineSectionConfig } from '../../../config/indexPage/TimelineSectionConfig'
import Buttons from './Buttons'
import classnames from 'classnames'

type Props = {}

const { timeline, doneTitle, doingTitle } = TimelineSectionConfig

const TimelineSection: React.FC<Props> = () => {
  const slideNumber = 3
  const maxIndex = 6
  const [index, setIndex] = useState(0)
  const [bgColor, setBgColor] = useState<'primary' | 'gray'>('primary')

  function onRightButtonClick() {
    if (index >= maxIndex) return

    setIndex(index + slideNumber)
  }

  function onLeftButtonClick() {
    if (index === 0) return

    setIndex(index - slideNumber)
  }

  useEffect(() => {
    if (index >= maxIndex) {
      setBgColor('gray')
    } else {
      setBgColor('primary')
    }
  }, [index])

  return (
    <div className={classnames([styles.timelineSection, styles[bgColor]])}>
      <div className='container'>
        <div className={styles.header}>
          <SectionHeader title={index >= maxIndex ? doingTitle : doneTitle} />

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
            {[...timeline.done, ...timeline.doing].map((item, index, array) => {
              return (
                <Item
                  newest={index === array.length - 1}
                  key={JSON.stringify(item.content)}
                  {...item}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineSection
