export const PageNodeConfig = {
  title: {
    en:
      'Phala network needs Gatekeeper as a security node to be online at all times',
    zh: 'Phala网络需要Gatekeeper作为安全节点，随时在线',
  },

  description: {
    en:
      'The gatekeeper is a vital role to the Phala network. The gatekeeper is responsible for block packaging and key management, which is an important way to ensure network availability under unexpected circumstances',
    zh:
      'gatekeeper 对于 Phala 网络来说是一个至关重要的角色。gatekeeper 负责块封装和密钥管理，这是确保在意外情况下网络可用性的重要方法。',
  },

  menuTitle: {
    en: 'Gatekeeper node and Nominator',
    zh: '守门人节点和提名人',
  },

  content: [
    {
      name: {
        en: ['Gatekeeper'],
        zh: ['看门人'],
      },
      content: {
        en: [
          'In the confidentiality contract, all data is encrypted and stored. In order to ensure that the miners can use the data at any time, we need the role of Gatekeeper to be online at all times and hold the key securely.',
          'Gatekeeper packs new blocks in the Phala network and manages the key distribution in the system, so it needs to be online at all times.',
          'A Gatekeeper must run the Gatekeeper client on a trusted device with high availability and high bandwidth. On each block, the node must be prepared to receive a new block on the submitted parachain. This process involves accepting, verifying, and republishing candidate blocks.',
        ],
        zh: [
          '在保密合同中，所有的数据都是加密存储的。为了保证矿工可以随时使用数据，我们需要Gatekeeper这个角色随时在线，并安全地持有密钥。',
          'Gatekeeper在Phala网络中打包新的区块，并管理系统中的密钥分配，所以它需要一直在线。',
          'Gatekeeper必须在高可用性和高带宽的可信设备上运行Gatekeeper客户端。在每个区块上，节点必须准备好接收提交的parachain上的新区块。这个过程包括接受、验证和重新发布候选区块。',
        ],
      },
    },
    {
      name: {
        en: ['Nominator'],
        zh: ['提名者'],
      },
      content: {
        en: [
          'Nominees are one of the main ways to participate in the Phala network to obtain income, and nomination is also commonly known as collateral mining. Every gatekeeper needs to be nominated to become a gatekeeper. The nominee pledged some tokens for the gatekeeper as a deposit, completed the nomination, becomes the gatekeeper’s credit endorsement, and can **share **the gatekeeper’s packaged income. ',
          'The existence of this role facilitates those who cannot run nodes 24 hours a day, and at the same time promotes the decentralization of the right to speak on the chain. When Gatekeeper is rewarded or punished, the nominator will also be rewarded or punished at the same time according to the voting ratio.',
        ],
        zh: [
          '提名是参与法拉网获取收益的主要途径之一，提名也就是俗称的领矿。每个守门人都需要被提名才能成为守门人。被提名者为守门人质押一些代币作为押金，完成提名，成为守门人的信用背书，可以**分享守门人的打包收入。',
          '这个角色的存在，方便了那些不能24小时跑节点的人，同时也促进了链上话语权的下放。当守门人受到奖励或惩罚时，提名人也会根据投票比例同时受到奖励或惩罚。',
        ],
      },
    },
    {
      name: {
        en: ['Consensus', 'mechanism'],
        zh: ['共识', '机制'],
      },
      content: {
        en: [
          'With reference to Polkadot, Phala uses the NPos inflation model to issue PHA tokens to Gatekeeper and nominators for rewards. Phala’s inflation number and inflation rate are not fixed, but through sophisticated algorithm design, the number of token mortgages is reasonably guided to achieve consensus security and token liquidity.',

          `NPoS consensus algorithm:
          NPoS (Nominated Proof of Stake) is a consensus algorithm designed by Polkadot based on the PoS algorithm. Validators run nodes to participate in the production and confirmation of blocks. Nominators can pledge their tokens to obtain the right to nominate. And nominate the validators you trust and get rewards.`,

          `PHA’s inflationary economy:
          Phala expects an annual inflation rate of 5%. In a 40% mortgage rate, the average annualized return of mortgage tokens is 12.5%`,
        ],
        zh: [
          '参照Polkadot，Phala采用NPos通胀模型，向守门人和提名人发行PHA代币进行奖励。Phala的通胀数和通胀率并不固定，但通过复杂的算法设计，合理引导代币抵押数量，实现共识安全和代币流动性。',

          'NPoS共识算法。 NPoS（Nominated Proof of Stake）是Polkadot基于PoS算法设计的共识算法。验证者运行节点，参与区块的生产和确认。提名者可以抵押自己的代币来获得提名权。并提名自己信任的验证者，获得奖励。',

          'PHA的通胀经济。 法拉预计年通货膨胀率为5%。在40%的抵押率下，抵押代币的平均年化收益为12.5%。',
        ],
      },
    },
  ],
}
