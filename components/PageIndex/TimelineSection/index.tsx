import React from 'react'
import { TimelineSectionConfig } from '../../../config/PageIndex/TimelineSectionConfig'
import Timeline from './Timeline'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import TimelineVertical from './TimelineVertical'
import styles from './index.module.scss'

type Props = {}

const { timeline, doneTitle, doingTitle } = TimelineSectionConfig

const TimelineSection: React.FC<Props> = () => {
  const { breakpoint } = useBreakpoint()

  return (
    <>
      <div className={styles.pc}>
        <Timeline></Timeline>
      </div>
      <div className={styles.mobile}>
        <TimelineVertical
          title={doneTitle}
          color='primary'
          data={timeline.done}></TimelineVertical>
        <TimelineVertical
          title={doingTitle}
          color='gray'
          data={timeline.doing}></TimelineVertical>
      </div>
    </>
  )
}

export default TimelineSection
