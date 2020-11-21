import React from 'react'
import { ContractSectionConfig } from '../../../../config/indexPage/ContractSectionConfig'
import ImageCard from '../../ImageCard'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {}

const List: React.FC<Props> = () => {
  return (
    <div className={classnames([styles.list, 'row'])}>
      {ContractSectionConfig.list.map((item) => {
        return (
          <div key={item.name.en} className='col-sm-6 col-md-3 col-lg-6'>
            <ImageCard {...item}></ImageCard>
          </div>
        )
      })}
    </div>
  )
}

export default List
