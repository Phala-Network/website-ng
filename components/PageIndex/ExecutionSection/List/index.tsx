import React from 'react'
import { ExecutionSectionConfig } from '../../../../config/PageIndex/ExecutionSectionConfig'
import ImageCard from '../../ImageCard'
import styles from './index.module.scss'

type Props = {}

const List: React.FC<Props> = () => {
  return (
    <div className={styles.list}>
      <div className='row'>
        {ExecutionSectionConfig.list.map((item) => {
          return (
            <div key={item.name.en} className='col-md-3 col-sm-6'>
              <ImageCard {...item}></ImageCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
