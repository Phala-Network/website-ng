export const PageMinerConfig = {
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
    zh: 'Gatekeeper node and Nominator',
  },

  content: [
    {
      name: {
        en: ['Gatekeeper'],
        zh: ['Gatekeeper'],
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
        zh: ['Nominator'],
      },
      content: {
        en: '',
        zh: '',
      },
    },
    {
      name: {
        en: ['Consensus', 'mechanism'],
        zh: ['Consensus', 'mechanism'],
      },
      content: {
        en: '',
        zh: '',
      },
    },
  ],
}
