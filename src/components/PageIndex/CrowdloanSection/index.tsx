import React from 'react'
import * as styles from './index.module.scss'

const LINKS = [
  {
    name: 'Parallel',
    icon: '/images/indexPage/crowdloanSecion/parallel.svg',
    href: 'https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2035'
  },
  {
    name: 'Polkadot.js',
    icon: '/images/indexPage/crowdloanSecion/polkadotjs.svg',
    href:
      'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan'
  },
  {
    name: 'Equlilibrium',
    icon: '/images/indexPage/crowdloanSecion/Equlilibrium.svg',
    href: 'https://xdot.equilibrium.io/en/contribute?p=Phala'
  },
  {
    name: 'OKEx',
    icon: '/images/indexPage/crowdloanSecion/ok.svg',
    href: 'https://www.okex.com/earn/slotauction/home'
  },
  {
    name: 'AscendEX',
    icon: '/images/indexPage/crowdloanSecion/ascend.svg',
    href: 'https://ascendex.com/zh-cn/dotslot'
  },
  {
    name: 'Gate',
    icon: '/images/indexPage/crowdloanSecion/gate.svg',
    href: 'https://www.gate.io/cn/slot_auction'
  },
  {
    name: 'Subscan',
    icon: '/images/indexPage/crowdloanSecion/subscan.svg',
    href: 'https://polkadot.subscan.io/crowdloan'
  }
]

const Crowdloan: React.FC = () => {
  return (
    <section className={styles.crowdloan}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.header}>Join Phala Crowdloan</div>
          <div className={styles.body}>
            <span className={styles.title}>contribute now</span>
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
            href="https://medium.com/phala-network/phalas-polkadot-slot-auction-strategy-d7432e73b6c">
            Read more
          </a>
        </div>
        <img
          className={styles.right}
          src="/images/indexPage/crowdloanSecion/logo.svg"
          alt="Phala Crowdloan"
        />
      </div>
    </section>
  )
}

export default Crowdloan
