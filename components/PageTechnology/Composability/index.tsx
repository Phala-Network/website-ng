import React from 'react'
import { CardContentProps } from '../../CardContent'
import { CardHeaderProps } from '../../CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Composability: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          Phala created a distributed computing architecture that separates
          computing and consensus, and achieves multiple computing task loads
          through the flexible scalability of TEE privacy cloud computing.
        </div>
        <div>
          Phala’s consensus adopts the NPOS consensus consistent with Polkadot.
          The NPOS (Nominated Proof of Stake) consensus algorithm is to use
          election to make the system safer and more efficient. The set of
          validators. The more democratic Phragmén algorithm prevents any
          routine pool from being The selected validator is too low
          representative, and the validator not selected is too low
          representative
        </div>
        <div>
          Phala’s computing layer adopts the design of free registration agency,
          mortgage economy and random allocation, which allows variable
          calculation tasks to be randomly dispatched to any TEE device for
          execution, and availability is achieved through secret smart contract
          design.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          基于 Substrate 搭建的 Phala 具有天然的互操作性，Phala
          计划成为波卡平行链，不仅可以服务整个波卡生态平行链，还可以服务于其他主流区块链开发者
        </div>
        <div>
          Phala
          Network与类似共识层/计算层分离+TEE计算设备网络的最大区别是，Phala的秘密智能合约通过异构设计和兼容XCMP协议的消息传递设计，实现运算在TEE环境内的智能合约完成互相调用和交互
        </div>
      </div>
    ),
  }

  return (
    <Card cardContentClassName={styles.cardContent} firstLetter {...props}>
      <I18nRender {...content}></I18nRender>
    </Card>
  )
}

export default Composability
