import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18n from '../../I18n'
import React from 'react'
import TagA from '../../TagA'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const config = [
  {
    en: 'Hardware: Computer with Intel SGX enabled CPU',
    zh: '硬件：搭载 Intel SGX 芯片的电脑'
  },
  {
    en: 'Software: SGX-enabled Linux (REC. Ubuntu 18.04)',
    zh: '软件：可通过SGX检测的Linux (推荐Ubuntu 18.04)'
  },
  {
    en:
      'Public IP for solo mining, or join a Phala-enabled mining pool otherwise',
    zh: '独立挖矿需要公网IP，其他矿工可以接入 Phala 矿池协议'
  }
]

const text = {
  en: 'A community maintained list of SGX-ready rigs',
  zh: '一份由社区维护的已知可用 SGX 设备一览表'
}

const link = {
  en: 'https://docs.google.com/spreadsheets/u/1/d/10MDwhiYGvkP0LZqy0hs8msn7XCKhZjJ6cB_RAgnpvV0/edit#gid=0',
  zh: 'https://www.yuque.com/fagephalanetwork/phalatothemoon/kp0rv0'
}

const Environment: React.FC<Props> = (props) => {
  return (
    <Card
      type='wideNormal'
      cardHeaderClassName={styles.cardHeader}
      cardContentClassName={styles.cardContent}
      {...props}>
      <div>
        {config.map((item, index) => {
          return (
            <div key={JSON.stringify(item)} className={styles.item}>
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
        <TagA href={link} className={styles.link}>
          <I18n {...text}></I18n>
        </TagA>
      </div>
    </Card>
  )
}

export default Environment
