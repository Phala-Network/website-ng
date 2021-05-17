export const PageNodeConfig = {
  title: {
    en:
      'Phala Network needs Gatekeepers as a security role to be online at all times',
    zh: 'Phala 网络需要 Gatekeeper 作为安全保障节点时刻在线'
  },

  description: {
    en:
      'Gatekeeper is a vital role to the Phala network. The gatekeeper is responsible for block producing and key management, which is an important way to ensure network availability under any circumstance',
    zh: [
      '守门人是对 Phala 网络至关重要的角色。守门人负责区块的打包和密钥管理，是保证网络可用性的重要途径',
      `
    提名人把 PHA 指定给守门人。通过提名，他们能够选择有效的守门人并享有相应的奖励`
    ]
  },

  menuTitle: {
    en: 'Gatekeeper and Nominator',
    zh: '守门人和提名人'
  },

  content: [
    {
      id: 'Gatekeeper',
      name: {
        en: ['Gatekeeper'],
        zh: ['守门人']
      },
      content: {}
    },
    {
      id: 'Nominator',
      name: {
        en: ['Nominator'],
        zh: ['提名人']
      },
      content: {}
    },
    {
      id: 'ConsensusMechanism',
      name: {
        en: ['Consensus', 'algorithm'],
        zh: ['共识', '机制']
      },
      content: {}
    }
  ]
}
