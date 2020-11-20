import React from 'react'
import { ExecutionSectionConfig } from '../../../../config/indexPage/ExecutionSectionConfig'
import I18n from '../../../I18n'
import styles from './index.module.scss'

type Props = {}

const List: React.FC<Props> = () => {
  return (
    <div className={styles.list}>
      <div className='row'>
        {ExecutionSectionConfig.list.map((item) => {
          return (
            <div className='col-md-3 col-sm-6'>
              <div className={styles.image}>
                <img src={item.image}></img>
              </div>
              <div className={styles.line}></div>
              <div className={styles.name}>
                <I18n {...item.name}></I18n>
              </div>
              <div className={styles.description}>
                <I18n {...item.description}></I18n>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
