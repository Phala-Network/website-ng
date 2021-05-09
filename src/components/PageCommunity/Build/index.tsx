import Card, { CardProps } from '../../Card'
import CardList from '../../TextCardList'
import React from 'react'
import * as styles from './index.module.scss'

const config = [
  {
    title: {
      en: 'Phala Watchman Program',
      zh: 'Phala 守望者计划'
    },
    description: {
      en:
        'A roleplay game where you can be whoever you want to be, and gain PHA prize via various contribution.',
      zh: '各有所长，各司其职，各放光彩'
    },
    url:
      'https://medium.com/phala-network/phala-watchman-program-building-a-web3-0-trustless-world-with-phala-36900be308c4'
  },
  {
    title: {
      en: 'Phala Spokesman Program',
      zh: 'Phala 发言人计划'
    },
    description: {
      en: 'Grow with Phala and be an opinion leader in the Web3.0 age',
      zh: 'PHA & 流量扶持，助你出道成为 Web3.0 时代的意见领袖'
    },
    url:
      'https://medium.com/phala-network/project-spokesman-win-up-to-10-000-pha-with-your-talent-and-creativity-37806f4cdba7'
  }
]

const imgPath = '/images/PageCommunity/icon-build-'

const Build: React.FC<CardProps> = (props) => {
  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      <CardList hoverEffect={true} imgPath={imgPath} config={config}></CardList>
    </Card>
  )
}

export default Build
