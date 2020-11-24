import React from 'react'
import { CardContentProps } from '../../CardContent'
import { CardHeaderProps } from '../../CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Nominator: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          Nominees are one of the main ways to participate in the Phala network
          to obtain income, and nomination is also commonly known as collateral
          mining. Every gatekeeper needs to be nominated to become a gatekeeper.
          The nominee pledged some tokens for the gatekeeper as a deposit,
          completed the nomination, becomes the gatekeeper’s credit endorsement,
          and can **share **the gatekeeper’s packaged income.
        </div>
        <br />
        <div>
          The existence of this role facilitates those who cannot run nodes 24
          hours a day, and at the same time promotes the decentralization of the
          right to speak on the chain. When Gatekeeper is rewarded or punished,
          the nominator will also be rewarded or punished at the same time
          according to the voting ratio.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          提名人是参与 Phala
          网络获取收益的主要方式之一，而提名也就是俗称的抵押挖矿。每一个守门人都需要有人提名才可以成为守门人。提名人通过抵押一些代币给守门人做保证金，完成了提名行为，成为了守门人的信用背书，即可共享守门人的打包收益。这一角色的存在方便了那些无法24小时跑节点的人，同时促进了链上话语权的去中心化。在Gatekeeper获得奖励或惩罚时，提名人也会按照投票比例同时受到奖励或惩罚。
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

export default Nominator
