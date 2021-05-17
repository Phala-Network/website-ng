import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18nRender from '../../I18nRender'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Nominator: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          Nominating is one of the main ways to participate in Phala Network to obtain rewards. Every Gatekeeper candidate has to be nominated to become a Gatekeeper. Nominators add their stake to the Gatekeepers they endorse, and <strong>share</strong> the Gatekeepers’ block rewards.
        </div>
        <br />
        <div>
          The existence of this role facilitates those who cannot run nodes 24 hours a day, and at the same time decentralize the power on the blockchain. When a Gatekeeper is rewarded or punished, the nominator will also be rewarded or punished proportionally.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          提名人是参与 Phala Network 获取收益的主要方式之一，而提名也就是俗称的抵押挖矿。每一个守门人都需要有人提名才可以成为守门人。提名人通过抵押一些代币给守门人做保证金，完成了提名行为，成为了守门人的信用背书，即可共享守门人的打包收益。这一角色的存在方便了那些无法24小时跑节点的人，同时促进了链上权力的去中心化。在Gatekeeper获得奖励或惩罚时，提名人也会按照投票比例同时受到奖励或惩罚。
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

export default Nominator
