import React from 'react'
import { I18nProps } from '../../I18n'
import PeopleInfo from '../PeopleInfo'
import styles from './index.module.scss'

type Props = {
  config: {
    avatar: string
    name: I18nProps
    position: I18nProps
    description: I18nProps
  }[]
}

const PeopleList: React.FC<Props> = (props) => {
  return (
    <div className={styles.peopleList}>
      {props.config.map((item) => {
        return (
          <div key={JSON.stringify(item)} className='col-md-3'>
            <PeopleInfo {...item}></PeopleInfo>
          </div>
        )
      })}
    </div>
  )
}

export default PeopleList
