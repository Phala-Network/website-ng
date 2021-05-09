import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import { cardData } from './cardData'
import Card from '../../Card'
import MarketTransactions from './MarketTransactions'
import React from 'react'
import TextCard from '../TextCard'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const HowToGet: React.FC<Props> = (props) => {
  return (
    <Card type='vertical' cardContentClassName={styles.cardContent} {...props}>
      <div className={classnames([styles.content, 'row'])}>
        {cardData.map((item) => {
          return (
            <div
              key={JSON.stringify(item)}
              className={classnames(['col-xl-4', 'col-lg-6', styles.item])}>
              <TextCard {...item} />
            </div>
          )
        })}

        <div className={classnames(['col-xl-8', 'col-lg-12', styles.item])}>
          <MarketTransactions></MarketTransactions>
        </div>
      </div>
    </Card>
  )
}

export default HowToGet
