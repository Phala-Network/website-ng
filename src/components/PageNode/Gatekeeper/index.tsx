import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18nRender from '../../I18nRender'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Gatekeeper: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          All the data in a confidential contract is end-to-end encrypted. To ensure the availability of the contract states, Gatekeepers are responsible for the key management and must always be online.
        </div>
        <div>
          Gatekeepers manage the contract keys and produce new block candidates. High availability is required.
        </div>
        <div>
          The node operator has to run a Gatekeeper on a trusted-computing enabled device with high availability and high bandwidth. At each block, Gatekeepers maintain the key rotation, prepare to receive user transactions and produce a new parachain block candidate. This process involves re-encryption, verification, acceptance and publication of candidate blocks.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          保密合约中的所有数据都加密保存，为了保证工作节点随时可以访问加密数据，我们需要 Gatekeeper 这一角色时刻在线并安全管理密钥。
        </div>
        <div>
          Gatekeeper 在 Phala Network 中负责管理系统中的密钥分配以及打包新区块，因此需要时刻在线。
        </div>
        <div>
          必须在高可用、高带宽、且具备可信计算能力的设备上运行 Gatekeeper 节点。每个区块，Gatekeeper 都必须维护合约密钥的轮转，接收用户交易，并产生新的平行链区块。这个过程涉及重加密、接受、验证、再发布候选区块。
        </div>
      </div>
    )
  }

  return (
    <Card
      type='normal'
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18nRender {...content}></I18nRender>
    </Card>
  )
}

export default Gatekeeper
