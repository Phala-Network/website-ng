import Card, { CardProps } from '../../Card'
import I18n from '../../I18n'
import React from 'react'
import TagA from '../../TagA'
import * as styles from './index.module.scss'

const config = [
  {
    en: 'Miner',
    zh: '矿工',
    url: {
      en: 'https://wiki.phala.network/en-us/learn/maintain/mine/',
      zh: 'https://wiki.phala.network/en-us/learn/maintain/mine/'
    }
  },
  {
    en: 'Gatekeeper',
    zh: '守门人',
    url: {
      en: 'https://wiki.phala.network/en-us/maintain/gatekeeper/gatekeeper/',
      zh: 'https://wiki.phala.network/en-us/maintain/gatekeeper/gatekeeper/'
    }
  },
  {
    en: 'Nominator',
    zh: '提名人',
    url: {
      en: 'https://wiki.phala.network/en-us/learn/maintain/gatekeeper/',
      zh: 'https://wiki.phala.network/en-us/learn/maintain/gatekeeper/'
    }
  }
]

const Maintain: React.FC<CardProps> = (props) => {
  return (
    <Card type="small" cardContentClassName={styles.cardContent} {...props}>
      {config.map((item, index) => {
        return (
          <div key={JSON.stringify(item)} className={styles.item}>
            <TagA href={item.url}>
              <img src={`/images/PageCommunity/icon${index + 1}.svg`} alt="" />
              <div className={styles.name}>
                <I18n {...item}></I18n>
              </div>
            </TagA>
          </div>
        )
      })}
    </Card>
  )
}

export default Maintain
