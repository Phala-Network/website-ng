import Newsletter from '../../Newsletter'
import React, { useState } from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

const LINKS = [
  {
    name: 'Polkadot.js',
    icon: '/images/indexPage/crowdloanSecion/polkadotjs.svg',
    href:
      'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan'
  },
  {
    name: 'Parallel',
    icon: '/images/indexPage/crowdloanSecion/parallel.svg',
    href: 'https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2035'
  },
  {
    name: 'Equilibrium',
    icon: '/images/indexPage/crowdloanSecion/Equlilibrium.svg',
    href: 'https://xdot.equilibrium.io/en/contribute?p=Phala'
  },
  {
    name: 'Subscan',
    icon: '/images/indexPage/crowdloanSecion/subscan.svg',
    href: 'https://polkadot.subscan.io/crowdloan'
  },
  // {
  //   name: 'Kraken',
  //   icon: '/images/indexPage/crowdloanSecion/kraken.svg',
  //   href: 'https://www.kraken.com/u/earn/parachains'
  // },
  // {
  //   name: 'AscendEX',
  //   icon: '/images/indexPage/crowdloanSecion/ascend.svg',
  //   href: 'https://ascendex.com/zh-cn/dotslot'
  // },
  {
    name: 'Gate',
    icon: '/images/indexPage/crowdloanSecion/gate.svg',
    href: 'https://www.gate.io/cn/slot_auction'
  },
  {
    name: 'KuCoin',
    icon: '/images/indexPage/crowdloanSecion/KuCoin.png',
    href: 'https://www.kucoin.com/earn/polkadot'
  }
]

const Crowdloan: React.FC = () => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <section className={styles.crowdloan}>
      {visible && (
        <div className={classnames(['container', styles.wrapper])}>
          <div className={styles.left}>
            <div className={styles.header}>Phala Crowdloan Reward Upgrate!</div>
            <ul className={styles.subHeader}>
              <li>Phala Crowdloan Reward Upgrate!</li>
              <li>1 DOT= 24 PHA +10% OG Bonus</li>
            </ul>
            <div className={styles.body}>
              <span className={styles.title}>Contribute Now</span>
              <div className={styles.itemBox}>
                {LINKS.map(({ name, icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.item}>
                    <img src={icon} alt={name} />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
            <a
              className={styles.footer}
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/phala-network/phala-crowdloan-upgrade-double-rewards-coming-9a01a7c32a62">
              Read more
            </a>
          </div>
          <img
            className={styles.right}
            src="/images/indexPage/crowdloanSecion/crowdloan-logo.svg"
            alt="Phala Crowdloan"
          />
          <img
            onClick={handleClose}
            className={styles.close}
            src="/images/indexPage/crowdloanSecion/close.svg"
            alt="close"
          />
        </div>
      )}
      <div className={styles.newsLetter}>
        <Newsletter></Newsletter>
      </div>
    </section>
  )
}

export default Crowdloan
