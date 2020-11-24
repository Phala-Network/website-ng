import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import styles from './index.module.scss'
import { data } from './data'
import TextCard from '../TextCard'
import classnames from 'classnames'

type Props = CardHeaderProps & CardContentProps

const TokenUtibility: React.FC<Props> = (props) => {
  return (
    <Card type='vertical' cardContentClassName={styles.cardContent} {...props}>
      <div className={classnames([styles.content, 'row'])}>
        {data.map((item) => {
          return (
            <div
              key={JSON.stringify(item)}
              className={classnames(['col-xl-4', 'col-lg-6', styles.item])}>
              <TextCard {...item} />
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default TokenUtibility
