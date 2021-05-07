import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Composability: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          Phala is built on Substrate, the blockchain framework that Polkadot is built on, for maximum interoperability with the whole Polkadot ecosystem of chains. We plans to become a Polkadot parachain, which can serve the entire Polkadot parachain ecosystem, as well as other blockchain developers.
        </div>
        <div>
          The highlight of Phala Network's heterogeneous architecture is that Phala confidential contracts are designed with interoperability in mind. It's based on XCMP to achieve interoperability and composability between contract and blockchains.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          基于 Substrate 搭建的 Phala 具有天然的互操作性，Phala 计划成为波卡平行链，不仅可以服务波卡生态下的平行链，还可以服务于其他区块链开发者
        </div>
        <div>
          Phala Network 与类似共识-计算层分离，以及TEE计算网络的最大区别是，Phala的保密合约采用了异构设计，并基于XCMP消息传递协议，实现了保密合约之间的互操作与可组合性
        </div>
      </div>
    ),
  }

  return (
    <Card
      type='vertical'
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18nRender {...content}></I18nRender>
    </Card>
  )
}

export default Composability
