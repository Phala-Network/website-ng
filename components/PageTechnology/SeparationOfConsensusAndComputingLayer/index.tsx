import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const SeparationOfConsensusAndComputingLayer: React.FC<Props> = (props) => {
  return (
    <Card
      type='vertical'
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18nRender
        en={
          <div>
            <div>
              Phala adopts a distributed computing architecture that separates computation and consensus. Thanks to the flexibility of the TEE network, Phala facilitates highly scalable confidential cloud computing.
            </div>
            <div>
              Phala utilises Polkadot's Nominated Proof of Stake (NPoS) algorithm to ensure that the elected validator set is optimised for system security and efficiency. The Phragmén algorithm prevents any group from being over-representative or under-representative.
            </div>
            <div>
              Phala’s computation layer adopts permissionless node registration, staking economics and random scheduling. Computation tasks are randomly and securely distributed across the global TEE network. The design of confidential contract guarantees the data availability.
            </div>
          </div>
        }
        zh={
          <div>
            <div>
              Phala创建了一个将计算和共识分开的分布式计算架构，
              通过TEE隐私云计算的灵活可扩展性实现异构计算任务负载。
            </div>
            <div>
              Phala的共识采用了与Polkadot一致的NPoS共识，NPOS (Nominated Proof of Stake) 共识算法就是用来选举出能让系统更安全，更高效的验证者集合，更加民主的Phragmén算法让任何节点池既不被选出的验证人过度代表，也不被选出的验证人过低代表
            </div>
            <div>
              Phala的计算层采用了自由注册节点、抵押经济和随机分发的设计，可以让隐私计算任务随机派发到任何一个TEE设备执行，并通过保密合约设计实现可用性
            </div>
          </div>
        }
      />
    </Card>
  )
}

export default SeparationOfConsensusAndComputingLayer
