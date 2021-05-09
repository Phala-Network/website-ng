import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18n from '../../I18n'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const ThreePartyTrustedCommunication: React.FC<Props> = (props) => {
  const content = {
    en: 'We have completed the construction of the TEE network through the full-lifetime trusted communication between “TEE - Blockchain - User”. All the TEE workers are registered on the blockchain and verified by the remote attestation protocol. The built-in GRANDPA light client in the TEE secures the communication between the blockchain and the TEE. Finally, the communication between the user and the TEE is end-to-en encryped with the Diffie-Hellman algorithm.',
    zh:
    '我们通过 “TEE — 区块链 — 用户” 间的全程可信通信，完成了 TEE 网络的搭建和运转。所有 TEE 设备均需用自己的远程认证报告在区块链上注册，当 TEE 从链上同步数据时， TEE 内搭建的 GRANDPA 轻客户端会完成对链上区块的验证和共识维护。用户和TEE间的可信通信则通过迪菲-赫尔曼密钥交换协议实现端到端加密。'
  }

  return (
    <Card
      type='vertical'
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18n {...content}></I18n>
    </Card>
  )
}

export default ThreePartyTrustedCommunication
