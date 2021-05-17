import Item from '../Item'
import React from 'react'
import SectionHeader from '../../../SectionHeader'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  data: any
  title: {
    [key: string]: string
  }
  color: 'gray' | 'primary'
}

const TimelineVertical: React.FC<Props> = (props) => {
  const { data, color, title } = props

  return (
    <div className={classnames([styles.timelineVertical, styles[color]])}>
      <SectionHeader title={title}></SectionHeader>

      <div className={styles.list}>
        {data.map((item) => {
          return <Item key={JSON.stringify(item.content)} {...item} />
        })}
      </div>
    </div>
  )
}

export default TimelineVertical
