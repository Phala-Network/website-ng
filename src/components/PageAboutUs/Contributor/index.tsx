import { config } from './config'
import Card, { CardProps } from '../../Card'
import PeopleList from '../PeopleList'
import React from 'react'
import * as styles from './index.module.scss'

const Consultant: React.FC<CardProps> = (props) => {
  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      <PeopleList config={config}></PeopleList>
    </Card>
  )
}

export default Consultant
