import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Gatekeeper: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          In the confidentiality contract, all data is encrypted and stored. In
          order to ensure that the miners can use the data at any time, we need
          the role of Gatekeeper to be online at all times and hold the key
          securely.
        </div>
        <div>
          Gatekeeper packs new blocks in the Phala network and manages the key
          distribution in the system, so it needs to be online at all times.
        </div>
        <div>
          A Gatekeeper must run the Gatekeeper client on a trusted device with
          high availability and high bandwidth. On each block, the node must be
          prepared to receive a new block on the submitted parachain. This
          process involves accepting, verifying, and republishing candidate
          blocks.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          在保密合约中所有数据都加密保存，为了保证矿工随时可以使用数据我们需要
          Gatekeeper 这一角色时刻在线并安全持有密钥。
        </div>
        <div>
          Gatekeeper 在 Phala
          网络里打包新区块、并管理系统中的密钥分配，因此需要时刻在线。
        </div>
        <div>
          一个 Gatekeeper 必须在高可用、高带宽的可信设备上运行 Gatekeeper
          客户端。每个区块上，节点都必须准备接收一个已提交的平行链上的新区块。这个过程涉及接受、验证、再发布候选区块。
        </div>
      </div>
    ),
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
