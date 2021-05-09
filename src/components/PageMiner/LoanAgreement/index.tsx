import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18nRender from '../../I18nRender'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const LoanAgreement: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        In Phala's token economics model, worker nodes have to mine with some PHA staked. To lower miners' entrance barrier, Phala implements a risk-free lending protocol similar to Polkadot's NPoS. PHA holders can lend their token to worker operators at an interest rate agreed by both parties, leading to the creation of an interest rates market.
      </div>
    ),
    zh: (
      <div>
        Phala的计算节点模型中，隐私计算节点需要抵押PHA才能注册并获得奖励。为降低设备参与门槛，我们将提供类似于波卡验证人-提名人的机制即借贷协议，让TEE设备可以通过持币者提名的方式完成抵押门槛，双方可以通过市场自由协商利率分配{' '}
      </div>
    )
  }

  return (
    <Card
      type='wideNormal'
      cardHeaderClassName={styles.cardHeader}
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18nRender {...content}></I18nRender>
    </Card>
  )
}

export default LoanAgreement
