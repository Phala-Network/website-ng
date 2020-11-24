import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import styles from './index.module.scss'
import TextCard from '../TextCard'
import classnames from 'classnames'
import { cardData } from './cardData'
import MarketTransactions from './MarketTransactions'

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
