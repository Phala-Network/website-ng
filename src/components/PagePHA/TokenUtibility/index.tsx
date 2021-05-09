import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import { data } from './data'
import Card from '../../Card'
import React from 'react'
import TextCard from '../TextCard'
import classnames from 'classnames'
import * as styles from './index.module.scss'

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
