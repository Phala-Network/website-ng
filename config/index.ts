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

export const MaintainMenuConfig = {
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
      href: {
        en: '//google.com',
        zh: '//google.com',
      },
    },
    {
      name: {
        en: 'Miner',
        zh: '矿工',
      },
      href: {
        en: '//google.com',
        zh: '//google.com',
      },
    },
    {
      name: {
        en: 'Community',
        zh: '社区',
      },
      href: {
        en: '//google.com',
        zh: '//google.com',
      },
    },
    {
      name: {
        en: 'About Us',
        zh: '关于我们',
      },
      href: {
        en: '//google.com',
        zh: '//google.com',
      },
    },
  ],
}

export const ResourcesMenuConfig = {
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
      href: {
        en: 'https://poc3.phala.network',
        zh: 'https://poc3.phala.network',
      },
    },
    {
      name: {
        en: 'Wiki',
        zh: 'Wiki',
      },
      href: {
        en: 'https://wiki.phala.network',
        zh: 'https://wiki.phala.network',
      },
    },
    {
      name: {
        en: 'Github',
        zh: 'Github',
      },
      href: {
        en: 'https://github.com/Phala-Network',
        zh: 'https://github.com/Phala-Network',
      },
    },
    {
      name: {
        en: 'Testnet',
        zh: '测试网',
      },
      href: {
        en: 'https://poc3.phala.network',
        zh: 'https://poc3.phala.network',
      },
    },
    {
      name: {
        en: 'Claim',
        zh: '领奖',
      },
      href: {
        en: 'https://stakedrop-claim.phala.network/',
        zh: 'https://stakedrop-claim.phala.network/',
      },
    },
  ],
}

export const MenuConfig: {
  name: { [key: string]: string }
  subMenu?: {
    name: { [key: string]: string }
    href: { [key: string]: string }
  }[]
  href?: { [key: string]: string }
}[] = [
  {
    name: {
      en: 'What is PHA',
      zh: '了解 PHA',
    },
    href: {
      en: '//google.com',
      zh: '//google.com',
    },
  },
  {
    name: {
      en: 'Technology',
      zh: '技术',
    },
    href: {
      en: '//google.com',
      zh: '//google.com',
    },
  },
  MaintainMenuConfig,
  ResourcesMenuConfig,
]

const config = {}

export default config
