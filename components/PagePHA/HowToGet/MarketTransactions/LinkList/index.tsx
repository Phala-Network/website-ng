import Link from 'next/link'
import React from 'react'
import TagA from '../../../../TagA'
import styles from './index.module.scss'

type Props = {}

const data = [
  {
    name: 'Huobi',
    href: 'https://www.huobi.com/zh-cn/exchange/pha_usdt',
  },
  {
    name: 'Bione',
    href: 'https://www.bione.me/en_US/trade/PHA_USDT',
  },
  {
    name: 'Hotbit',
    href: 'https://www.hotbit.io/exchange?symbol=PHA_USDT',
  },
  {
    name: 'Bibox',
    href: 'https://www.bibox.com/v2/exchange?pair=PHA_USDT',
  },
  {
    name: 'MXC',
    href: 'https://www.mxc.ai/trade/easy#PHA_USDT',
  },
]

const LinkList: React.FC<Props> = (props) => {
  return (
    <div className={styles.linkList}>
      {data.map((item, index) => {
        return (
          <TagA key={item.href} href={item.href} className={styles.item}>
            <img src={`/images/PagePHA/icon${index}.png`} alt={item.name} />
            <div className={styles.name}>{item.name}</div>
            <svg
              width='9'
              height='9'
              viewBox='0 0 9 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.00048 0.375C9.00048 0.167893 8.83259 0 8.62548 0H4.12548C3.91838 0 3.75048 0.167893 3.75048 0.375C3.75048 0.582107 3.91838 0.75 4.12548 0.75H7.72023L0.109982 8.3595C0.0151282 8.45435 -0.0219165 8.59261 0.0128025 8.72218C0.0475215 8.85175 0.14873 8.95296 0.278303 8.98768C0.407876 9.0224 0.546128 8.98535 0.640982 8.8905L8.25048 1.28025V4.875C8.25048 5.08211 8.41838 5.25 8.62548 5.25C8.83259 5.25 9.00048 5.08211 9.00048 4.875V0.375Z'
                fill='black'
              />
            </svg>
          </TagA>
        )
      })}
    </div>
  )
}

export default LinkList
