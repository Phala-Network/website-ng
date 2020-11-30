import React from 'react'
import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import DetailPageButton from '../../DetailPageButton'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import IconTextCard from '../IconTextCard'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = CardHeaderProps & CardContentProps

const HowToUse: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          In this tutorial, we will help you set up a "Hello World" development
          environment. You will deploy the complete core blockchain stack and
          connect the Web UI to the blockchain. At the end of this tutorial, you
          will be able to:
        </div>
        <br />
        <div>- Send a confidential transaction</div>
        <div>
          - Get a ready-to-hack version of Phala Network to build your own
          confidential contract Dapp
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          在本教程中，我们将帮助您建立一个“ Hello World”开发环境。
          您将部署完整的区块链技术栈，并将Web UI连接到区块链上。
          在本教程结束时，您将能够：
        </div>
        <br />
        <div>- 发送秘密交易</div>
        <div>- 运行Phala Network开发版本，以便构建自己的保密合约Dapp</div>
      </div>
    ),
  }

  return (
    <Card type='vertical' firstLetter {...props}>
      <div className='row flex-column-reverse flex-md-row'>
        <div className={classnames(['col-md-6', styles.textAndButton])}>
          <I18nRender {...content}></I18nRender>
          <DetailPageButton
            className={styles.button}
            color='black'
            type='link'
            href={{
              en:
                'https://github.com/Phala-Network/hello-world-by-polkadot/issues/1',
              zh:
                'https://github.com/Phala-Network/hello-world-by-polkadot/issues/1',
            }}
            text={{
              en: 'check tutorial',
              zh: '查看教程',
            }}
            hasArrowIcon></DetailPageButton>
        </div>
        <div className='col-md-6'>
          <div className={styles.iconCard}>
            <img src='/images/PageTechnology/code.png' alt='' />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default HowToUse
