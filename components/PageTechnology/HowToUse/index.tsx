import React from 'react'
import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import { CardContentProps } from '../../CardContent'
import { CardHeaderProps } from '../../CardHeader'
import DetailPageButton from '../../DetailPageButton'
import I18nRender from '../../I18nRender'
import Card from '../Card'
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
        <ul>
          <li>Send a confidential transaction</li>
          <li>
            Get the ready version of Phala Network to build your own
            confidential Dapp
          </li>
        </ul>
      </div>
    ),
    zh: (
      <div>
        在本教程中，我们将帮助您建立一个“ Hello World”开发环境。
        您将部署完整的核心区块链堆栈，并将Web UI连接到区块链。
        在本教程结束时，您将能够：
        <ul>
          <li> 发送保密交易</li>
          <li> 获取准备就绪的Phala Network版本，以构建自己保密Dapp</li>
        </ul>
      </div>
    ),
  }

  return (
    <Card firstLetter {...props}>
      <div className='row'>
        <div className={classnames(['col-md-8', styles.textAndButton])}>
          <I18nRender {...content}></I18nRender>
          <DetailPageButton
            className={styles.button}
            color='black'
            type='link'
            href={EconomyWhitepaperConfig.href}
            text={EconomyWhitepaperConfig.name}
            hasArrowIcon></DetailPageButton>
        </div>
        <div className='col-md-4'>
          <IconTextCard
            bgIndex={3}
            text={{
              en: 'code here',
              zh: '查看教程',
            }}></IconTextCard>
        </div>
      </div>
    </Card>
  )
}

export default HowToUse
