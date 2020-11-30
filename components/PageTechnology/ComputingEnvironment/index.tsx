import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18n from '../../I18n'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const ComputingEnvironment: React.FC<Props> = (props) => {
  const content = {
    en: `TEE (Trust Execution Environment) is a special hardware component isolated from the rest of the system. With independent registers, cache and encrypted memory area, its operation is completely independent of the operating system, virtual machine monitor (VMM) , BIOS and other core components. Separate TEE has limited functionalities, but Phala combines TEE and blockchain to complement the advantages of TEE and blockchain to form a secure and efficient distributed computing cloud.`,
    zh: `TEE是可信执行环境（Trust Execution Environment），基于可信硬件（即与系统其他部分隔离开的硬件），拥有独立的寄存器、缓存和加密内存，其运行完全独立于操作系统、虚拟机监视器（VMM）、BIOS 以及其他核心部件。单个的TEE不具备大规模功用，但 Phala 将 TEE 和区块链相结合，让TEE和区块链优势互补，形成安全且高效的分布式隐私计算云`,
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

export default ComputingEnvironment
