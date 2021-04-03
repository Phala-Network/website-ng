import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'
import CardList from '../../TextCardList'
import TagA from '../../TagA'

type Props = CardHeaderProps & CardContentProps

const config = [
  {
    title: {
      en: 'Online rewards',
      zh: '在线奖励',
    },
    description: {
      en:
        'Standby worker nodes receive rewards proportionally based on their performance.',
      zh: 'TEE设备保持在线即可获得奖励，由所有在线设备按性能分配',
    },
  },
  {
    title: {
      en: 'Computation rewards',
      zh: '计算奖励',
    },
    description: {
      en:
        'Selected workers are rewarded based on the randomly assigned computing tasks.',
      zh: 'Phala随机性分发隐私计算任务，在线矿工完成计算任务后获得',
    },
  },
]

const imgPath = '/images/PageMiner/card-icon-'

const Rewards: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>70% of the initial supply (i.e. 700M) is reserved for mining.</div>
        <div>
          At beginning, it has a fixed amount of daily supply, 720,000 PHA.
          Among them 144,000 PHA goes into the treasury, and all the rest is
          divided proportionally to the miners.
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>矿工可以挖出的 PHA，占到了初始发行量的 70%，即 7 亿。</div>
        <div>
          初始每日产量固定为 72 万 PHA，除其中 14.4 万 PHA
          自动纳入财政库外，其余所有均由矿工按参与方式分配。
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
          en='Phala has two kinds of reward for miners: online rewards and computation rewards.'
          zh='Phala 为矿工设计了两种奖励：在线奖励和计算奖励。'></I18n>
      </div>

      <CardList imgPath={imgPath} config={config}></CardList>

      <div className={styles.text}>
        <I18nRender
          en={
            <>
              For more details, such as the halving rule and the algorithm,
              please refer to the{' '}
              <TagA
                className={styles.link}
                href='https://wiki.phala.network/en-us/'>
                Miner Guide
              </TagA>
              .
            </>
          }
          zh={
            <>
              更多细则，如衰减规则、算法，请查阅
              <TagA
                className={styles.link}
                href='https://www.yuque.com/phala/mining'>
                矿工手册
              </TagA>
              。
            </>
          }></I18nRender>
      </div>
    </Card>
  )
}

export default Rewards
