import { config } from './config'
import Card, { CardProps } from '../../Card'
import React from 'react'
import * as styles from './index.module.scss'

function getPath (name: number) {
  return `/images/PageAboutUs/builder/${name + 1}.png`
}

const CommunityBuilder: React.FC<CardProps> = (props) => {
  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      {config.map((item, index) => {
        return (
          <div key={item.name} className={styles.item}>
            <img alt={item.name} src={getPath(index)}></img>
            <div className={styles.label}>
              <div>{item.name}</div>
              <div>{item.from}</div>
            </div>
          </div>
        )
      })}
      <div style={{ flexGrow: 1 }}></div>
    </Card>
  )
}

export default CommunityBuilder
