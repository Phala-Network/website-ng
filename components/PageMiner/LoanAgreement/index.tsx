import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const LoanAgreement: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        Lower the mortgage threshold. In Phala's computing node model, private
        computing nodes need to mortgage PHA to register and receive rewards. In
        order to lower the equipment participation threshold, we will provide a
        mechanism similar to Polkadot validator-nominator, so that TEE equipment
        can complete the mortgage threshold through the nomination of token
        holders, and the two parties can freely negotiate the profit sharing
        mechanism through the market.
      </div>
    ),
    zh: (
      <div>
        Phala的计算节点模型中，隐私计算节点需要抵押PHA才能注册并获得奖励。为降低设备参与门槛，我们将提供类似于波卡验证人-提名人的机制即借贷协议，让TEE设备可以通过持币者提名的方式完成抵押门槛，双方可以通过市场自由协商分润机制{' '}
      </div>
    ),
  }

  return (
    <Card
      type='normal'
      cardHeaderClassName={styles.cardHeader}
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18nRender {...content}></I18nRender>
    </Card>
  )
}

export default LoanAgreement
