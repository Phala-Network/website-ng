import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import classnames from 'classnames'
import IconTextCard from '../IconTextCard'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const ApplicableScenarios: React.FC<Props> = (props) => {
  const config = [
    {
      text: {
        en: 'Proprietary function development of Defi and Dapp',
        zh: 'Defi和Dapp的隐私功能开发',
      },
    },
    {
      text: {
        en: 'Decentralized financial design',
        zh: '去中心化金融设计',
      },
    },
    {
      text: {
        en:
          'Data collection, proprietary data protection, data transactions in a secure environment',
        zh: '数据收集、隐私数据保护、安全环境下的数据交易',
      },
    },
    {
      text: {
        en: 'Artificial Intelligence Medical',
        zh: '人工智能医疗',
      },
    },
    {
      text: {
        en: 'Joint Risk Control',
        zh: '联合风控',
      },
    },
  ]

  return (
    <Card
      type='vertical'
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <div className={classnames([styles.applicableScenarios, 'row'])}>
        {config.map((item, index) => {
          return (
            <div
              key={JSON.stringify(item.text)}
              className={classnames([styles.item, 'col-md-4'])}>
              <IconTextCard bgIndex={index + 1} {...item}></IconTextCard>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default ApplicableScenarios
