import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18nRender from '../../I18nRender'
import Card from '../../Card'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = CardHeaderProps & CardContentProps

const Mining: React.FC<Props> = (props) => {
  const content = {
    en: (
      <div>
        <div>
          Any TEE device can be registered as a
          <Link href='/miner'>
            <a>
              <b>Phala miner</b>
            </a>
          </Link>
        </div>
        <br />
        <div>Rewards decay by 25% every 6 months</div>
        <br />
        <div>
          20% ecological contribution donation of TEE mining Treasure rate: 20%
        </div>
      </div>
    ),
    zh: (
      <div>
        <div>
          任何TEE设备均可注册成为
          <Link href='/miner'>
            <a>
              <b>Phala矿工</b>
            </a>
          </Link>
        </div>
        <br />
        <div>每6个月奖励衰减25%</div>
        <br />
        <div>TEE挖矿的20%生态贡献捐献 Treasure rate: 20%</div>
      </div>
    ),
  }

  return (
    <Card type='vertical' cardContentClassName={styles.cardContent} {...props}>
      <div className={styles.title}>
        <I18nRender {...content}></I18nRender>
      </div>
      <div className={styles.pieImage}>
        <img src={`/images/PagePHA/line.svg`} alt='pie' />
      </div>
    </Card>
  )
}

export default Mining
