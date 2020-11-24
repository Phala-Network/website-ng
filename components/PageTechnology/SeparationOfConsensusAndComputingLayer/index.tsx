import React from 'react'
import { CardContentProps } from '../../CardContent'
import { CardHeaderProps } from '../../CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const SeparationOfConsensusAndComputingLayer: React.FC<Props> = (props) => {
  return (
    <Card cardContentClassName={styles.cardContent} firstLetter {...props}>
      <I18nRender
        en={
          <div>
            <div>
              Phala created a distributed computing architecture that separates
              computing and consensus, and achieves multiple computing task
              loads through the flexible scalability of TEE privacy cloud
              computing.
            </div>
            <div>
              Phala’s consensus adopts the NPOS consensus consistent with
              Polkadot. The NPOS (Nominated Proof of Stake) consensus algorithm
              is to use election to make the system safer and more efficient.
              The set of validators. The more democratic Phragmén algorithm
              prevents any routine pool from being The selected validator is too
              low representative, and the validator not selected is too low
              representative
            </div>
            <div>
              Phala’s computing layer adopts the design of free registration
              agency, mortgage economy and random allocation, which allows
              variable calculation tasks to be randomly dispatched to any TEE
              device for execution, and availability is achieved through secret
              smart contract design.
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
              Phala的共识采用了与Polkadot一致的NPOS共识，NPOS( Nominated Proof
              of
              Stake)共识算法就是用来选举出能让系统更安全，更高效的验证者集合，更加民主的Phragmén算法让任何节点池既不被选出的验证人过度代表，也不被选出的验证人过低代表
            </div>
            <div>
              Phala的计算层采用了自由注册节点、抵押经济和随机分发的设计，可以让隐私计算任务随机派发到任何一个TEE设备执行，并通过秘密智能合约设计实现可用性
            </div>
          </div>
        }
      />
    </Card>
  )
}

export default SeparationOfConsensusAndComputingLayer
