export const TechWhitepaperConfig = {
  name: {
    en: 'Tech Whitepaper',
    zh: '技术白皮书',
  },
  href: {
    en: 'https://files.phala.network/phala-paper.pdf',
    zh: 'https://files.phala.network/phala-paper.pdf',
  },
}

export const EconomyWhitepaperConfig = {
  name: {
    en: 'Economy Whitepaper',
    zh: '经济白皮书',
  },
  href: {
    en: 'https://files.phala.network/phala-token-economics-zh.pdf',
    zh: 'https://files.phala.network/phala-token-economics-cn.pdf',
  },
}

export const menuConfig = [
  {
    name: {
      en: 'What is PHA',
      zh: '了解 PHA',
    },
    href: '//google.com',
  },
  {
    name: {
      en: 'Technology',
      zh: '技术',
    },
    href: '//google.com',
  },
  {
    name: {
      en: 'Maintain',
      zh: '生态',
    },
    subMenu: [
      {
        name: {
          en: 'Node',
          zh: '节点',
        },
        href: '//google.com',
      },
      {
        name: {
          en: 'Miner',
          zh: '矿工',
        },
        href: '//google.com',
      },
      {
        name: {
          en: 'Community',
          zh: '社区',
        },
        href: '//google.com',
      },
      {
        name: {
          en: 'About Us',
          zh: '关于我们',
        },
        href: '//google.com',
      },
    ],
  },
  {
    name: {
      en: 'Resources',
      zh: '资源',
    },
    subMenu: [
      TechWhitepaperConfig,
      EconomyWhitepaperConfig,
      {
        name: {
          en: 'DarkWallet',
          zh: '暗钱包',
        },
        href: 'https://poc3.phala.network',
      },
      {
        name: {
          en: 'Wiki',
          zh: 'Wiki',
        },
        href: 'https://wiki.phala.network',
      },
      {
        name: {
          en: 'Github',
          zh: 'Github',
        },
        href: 'https://github.com/Phala-Network',
      },
      {
        name: {
          en: 'Testnet',
          zh: '测试网',
        },
        href: 'https://poc3.phala.network',
      },
      {
        name: {
          en: 'Claim',
          zh: '领奖',
        },
        href: 'https://stakedrop-claim.phala.network/',
      },
    ],
  },
]

const config = {}

export default config
