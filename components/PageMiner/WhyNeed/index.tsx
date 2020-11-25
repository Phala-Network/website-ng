import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const WhyNeed: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        The highly confidential and highly scalable network composed of TEE is
        the carrier of Phala’s confidential smart contract. Therefore, we need a
        CPU equipped with TEE and capable of executing confidential contracts to
        complete calculations. This requires similar miners in the PoW chain:
        access to the “mining client” to provide computing power for the network
        and obtain revenue.
      </div>
    ),
    zh: (
      <div>
        由 TEE 组成的高机密性、高可拓展性的网络，是 Phala
        机密智能合约的载体。因此，我们需要搭载TEE、可以执行保密合约的CPU来完成计算，这就需要类似PoW链中的矿工：接入“挖矿客户端”，为网络提供算力，并获得收益。{' '}
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

export default WhyNeed
