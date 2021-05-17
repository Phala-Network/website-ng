import * as React from 'react'

export const cardData = [
  {
    link: {
      en: '/miner',
      zh: '/miner'
    },
    title: {
      en: (
        <div>
          Contribute your <b>TEE computing power</b>
        </div>
      ),
      zh: (
        <div>
          贡献你的 <b>TEE 算力</b>
        </div>
      )
    },
    content: {
      en: (
        <div>
          <div>- Intel SGX-enabled computer </div>
          <div>- A certain amount of PHA staking </div>
          <div>- Public IP or join a Phala mining pool</div>
        </div>
      ),
      zh: (
        <div>
          <div>- 支持英特尔 SGX 的计算设备</div>
          <div>- 抵押一定PHA</div>
          <div>- 公网IP或接入Phala矿池协议</div>
        </div>
      )
    }
  },
  {
    link: {
      en: 'https://wiki.phala.network/en-us/docs/poc2/run-a-gatekeeper/',
      zh: 'https://wiki.phala.network/zh-cn/docs/poc2/run-a-gatekeeper/'
    },
    title: {
      en: (
        <div>
          Become a <b>Gatekeeper</b>
        </div>
      ),
      zh: (
        <div>
          成为<b>守门人</b>
        </div>
      )
    },
    content: {
      en: (
        <div>
          <div>- Intel SGX-enabled computer</div>
          <div>- High quality network and high available power supply</div>
        </div>
      ),
      zh: (
        <div>
          <div>- 支持英特尔 SGX 的计算设备</div>
          <div>- 高带宽、低延迟的网络环境与高可用电源</div>
        </div>
      )
    }
  },
  {
    link: {
      en: '/node',
      zh: '/node'
    },
    title: {
      en: (
        <div>
          Become a <b>Nominator</b>
        </div>
      ),
      zh: (
        <div>
          成为<b>提名人</b>
        </div>
      )
    },
    content: {
      en: <div>- Hold PHA</div>,
      zh: <div>- 持有PHA</div>
    }
  },
  {
    link: {
      en:
        'https://forum.phala.network/t/phala-ipo-strategy-on-polkadot-parachain-slots-auction/1083',
      zh:
        'https://forum.phala.network/t/phala-ipo-strategy-on-polkadot-parachain-slots-auction/1083'
    },

    title: {
      en: <div>Support Phala Network</div>,
      zh: <div>通过DOT或KSM支持Phala Network</div>
    },
    content: {
      en: <div>to become a parachain with your DOT or KSM</div>,
      zh: <div>成为平行链</div>
    }
  }
]
