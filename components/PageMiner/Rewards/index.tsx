import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'
import CardList from '../../TextCardList'

type Props = CardHeaderProps & CardContentProps

const config = [
  {
    title: {
      en: 'Online rewards',
      zh: '在线奖励',
    },
    description: {
      en:
        'TEE devices can get rewards when they stay online, and all online devices are equally divided',
      zh: 'TEE设备保持在线即可获得奖励，由所有在线设备平分',
    },
    url: 'https://google.com',
  },
  {
    title: {
      en: 'Task rewards',
      zh: '任务奖励',
    },
    description: {
      en:
        'Phala randomly distributes private computing tasks, which are obtained after online miners complete computing tasks',
      zh: 'Phala随机性分发隐私计算任务，在线矿工完成计算任务后获得',
    },
    url: 'https://google.com',
  },
]

const imgPath = '/images/PageMiner/card-icon-'

const Rewards: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          The PHA that miners can dig out accounts for 70% of the initial
          issuance, or 700 million.
        </div>
        <div>
          The daily output is fixed at 720,000. Except for 144,000 of which are
          automatically included in the financial library, all the rest are
          divided equally by the miners according to their participation.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>矿工可以挖出的 PHA，占到了初始发行量的 70%，即 7 亿。</div>
        <div>
          每日产量固定为 72 万，除其中 14.4
          万自动纳入财政库外，其余所有均由矿工按参与方式平分。
        </div>
      </div>
    ),
  }

  return (
    <Card type='vertical' cardContentClassName={styles.cardContent} {...props}>
      <div className={classnames([styles.textAndImage, 'row'])}>
        <div className={classnames([styles.description, 'col-md-5'])}>
          <I18nRender {...content}></I18nRender>
        </div>
        <div className={classnames([styles.pieImage, 'col-md-7'])}>
          <img src={`/images/PagePHA/line.svg`} alt='pie' />
        </div>
      </div>

      <div className={styles.text}>
        <I18n
          en='Phala designed two rewards for miners: online rewards and task rewards.'
          zh='Phala 为矿工设计了两种奖励：在线奖励和任务奖励。'></I18n>
      </div>

      <CardList imgPath={imgPath} config={config}></CardList>

      <div className={styles.text}>
        <I18n
          en='For more details, such as attenuation rules and algorithms, please refer to the miner’s manual.'
          zh='更多细则，如衰减规则、算法，请查阅矿工手册。'></I18n>
      </div>
    </Card>
  )
}

export default Rewards
