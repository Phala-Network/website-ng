import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import styles from './index.module.scss'
import I18n from '../../I18n'

type Props = CardHeaderProps & CardContentProps

const config = [
  {
    en: 'Hardware: PC/laptop with Intel chip supporting SGX',
    zh: '硬件：搭载支持 SGX 的英特尔芯片的电脑/笔记本电脑',
  },
  {
    en: 'Software: Ubuntu 18.04.5 + passed SGX mining test',
    zh: '软件：Ubuntu 18.04.5 + 通过 SGX 挖矿测试',
  },
  {
    en:
      'Public IP: required. But miners who don’t have access to Phala’s mining pool protocol',
    zh: '公网ip：需要。但没有的矿工可以接入 Phala 的矿池协议',
  },
]

const text = {
  en: 'A list of community-made mining test equipment that has passed SGX',
  zh: '社区自制已通过 SGX 挖矿测试设备一览表',
}

const WhyNeed: React.FC<Props> = (props) => {
  return (
    <Card
      type='wideNormal'
      cardHeaderClassName={styles.cardHeader}
      cardContentClassName={styles.cardContent}
      {...props}>
      <div>
        {config.map((item, index) => {
          return (
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={`/images/PageMiner/icon${index}.svg`} alt='' />
              </div>
              <div>
                <I18n {...item}></I18n>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.text}>
        <I18n {...text}></I18n>
      </div>
    </Card>
  )
}

export default WhyNeed
