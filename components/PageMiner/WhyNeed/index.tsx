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
        The backbone of the Phala network is a highly scalable distributed network of worker nodes powered by TEE-capable CPU's, working to ensure the secure, reliable operation of confidential Smart Contracts.
      </div>
    ),
    zh: (
      <div>
        由 TEE 组成的高机密性、高可拓展性的网络，是 Phala 保密智能合约的载体。因此，我们需要搭载TEE、可以执行保密合约的CPU来完成计算，这就需要类似 PoW 链中的矿工：运行“工作节点客户端”，为网络提供算力，并获得收益。{' '}
      </div>
    ),
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

export default WhyNeed
