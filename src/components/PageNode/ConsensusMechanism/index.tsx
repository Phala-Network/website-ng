import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18nRender from '../../I18nRender'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const ConsensusMechanism: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          Inspired by Polkadot, Phala adopts the NPoS inflation model to issue PHA tokens as the incentives for Gatekeeper and nominators. Phala’s inflation rate is not fixed, but through a sophisticated algorithm design, the amount of the staked token is reasonably guided to achieve a balance between the staking security and the token liquidity.
        </div>
        <div>
          <br />
        </div>
        <div>
          <b>NPoS consensus algorithm:</b>
        </div>
        <div>
          NPoS (Nominated Proof of Stake) is a consensus algorithm designed by Polkadot. Validators run nodes to participate in the production and finalization of blocks. Nominators can stake their tokens to obtain the right to nominate the trusted validators.
        </div>
        <div>
          <br />
        </div>
        <div>
          <b>PHA inflation:</b>
        </div>
        <div>
          Phala expects an annual inflation rate of 5%. With a 40% staking rate, the APR is 12.5%.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          参考Polkadot，Phala采用NPos通胀模型对Gatekeeper和提名人发行PHA代币用于奖励。Phala的通胀数量和通胀率不是固定的，而是通过精妙的算法设计，合理引导代币抵押数量，实现共识安全性和代币流动性。
        </div>
        <br />

        <div>
          <b>NPoS共识算法：</b>
        </div>
        <div>
          NPoS（Nominated Proof of
          Stake，提名权益证明）是Polkadot基于PoS算法设计的共识算法，验证人（Validator）运行节点参与生产和确认区块，提名人（Nominator）可以抵押自己的代币获得提名权，并提名自己信任的验证人，获得奖励。
        </div>
        <br />

        <div>
          <b>PHA的通胀经济：</b>
        </div>
        <div>
          Phala预期年通胀率为5%。在40%的抵押率中，抵押代币的平均年化收益为12.5%
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

export default ConsensusMechanism
