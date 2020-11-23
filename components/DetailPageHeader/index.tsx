import React from 'react'
import SectionHeader, { SectionHeaderProps } from '../SectionHeader'
import styles from './index.module.scss'

type Props = SectionHeaderProps

const DetailPageHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.header}>
      <SectionHeader
        {...props}
        color='gray'
        titleClassName={styles.title}
        descriptionClassName={styles.description}></SectionHeader>
    </div>
  )
}

export default DetailPageHeader
