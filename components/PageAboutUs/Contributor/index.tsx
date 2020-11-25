import React from 'react'
import Card, { CardProps } from '../../Card'
import styles from './index.module.scss'
import { config } from './config'
import PeopleList from '../PeopleList'

const Consultant: React.FC<CardProps> = (props) => {
  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      <PeopleList config={config}></PeopleList>
    </Card>
  )
}

export default Consultant
