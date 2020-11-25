import React from 'react'
import Card, { CardProps } from '../../Card'
import styles from './index.module.scss'
import { config } from './config'

function getPath(name, base = 1) {
  const imageBase = '/images/PageAboutUs/builder'

  name = ('0' + name).slice(-2)

  if (base > 1) {
    return imageBase + `/${name}/${name}@${base}x.png ${base}x`
  } else {
    return imageBase + `/${name}/${name}.png`
  }
}

const Consultant: React.FC<CardProps> = (props) => {
  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      {config.map((item, index) => {
        index += 1

        return (
          <div className={styles.item}>
            <img
              alt={item.name}
              src={getPath(index)}
              srcSet={getPath(index, 2) + ',' + getPath(index, 3)}></img>
            <div className={styles.label}>
              <div>
                {item.name} - {item.from}
              </div>
            </div>
          </div>
        )
      })}
    </Card>
  )
}

export default Consultant
