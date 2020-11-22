import React from 'react'
import { TimelineSectionConfig } from '../../../config/indexPage/TimelineSectionConfig'
import Timeline from './Timeline'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import TimelineVertical from './TimelineVertical'

type Props = {}

const { timeline, doneTitle, doingTitle } = TimelineSectionConfig

const TimelineSection: React.FC<Props> = () => {
  const { breakpoint } = useBreakpoint()

  if (breakpoint !== 'mobile') {
    return <Timeline></Timeline>
  } else {
    return (
      <>
        <TimelineVertical
          title={doneTitle}
          color='primary'
          data={timeline.done}></TimelineVertical>
        <TimelineVertical
          title={doingTitle}
          color='gray'
          data={timeline.doing}></TimelineVertical>
      </>
    )
  }
}

export default TimelineSection
