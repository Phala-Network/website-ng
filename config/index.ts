import { EconomyWhitepaperConfig } from './EconomyWhitepaperConfig'
import { GithubConfig } from './GithubConfig'
import { WikiConfig } from './WikiConfig'

export const TechWhitepaperConfig = {
  name: {
    en: 'Technical Whitepaper',
    zh: '技术白皮书',
  },
  href: {
    en: 'https://files.phala.network/phala-paper.pdf',
    zh: 'https://files.phala.network/phala-paper.pdf',
  },
}

export const MaintainMenuConfig = {
  name: {
    en: 'Participate',
    zh: '参与',
  },
  subMenu: [
    {
      name: {
        en: 'Miner',
        zh: '矿工',
      },
      href: {
        en: '/miner',
        zh: '/miner',
      },
    },
    {
      name: {
        en: 'Node',
        zh: '节点',
      },
      href: {
        en: '/node',
        zh: '/node',
      },
    },
    {
      name: {
        en: 'Community',
        zh: '社区',
      },
      href: {
        en: '/community',
        zh: '/community',
      },
    },
    {
      name: {
        en: 'About Us',
        zh: '关于我们',
      },
      href: {
        en: '/aboutUs',
        zh: '/aboutUs',
      },
    },
  ],
}

export const ExplorerConfig = {
  name: {
    en: 'Explorer',
    zh: '区块链浏览器',
  },
  href: {
    en: 'https://phala.subscan.io',
    zh: 'https://phala.subscan.io',
  },
}

export const DarkWalletConfig = {
  name: {
    en: 'PhaSe Wallet',
    zh: '暗钱包',
  },
  href: {
    en: 'https://poc3.phala.network',
    zh: 'https://poc3.phala.network',
  },
}

export const ResourcesMenuConfig = {
  name: {
    en: 'Resources',
    zh: '资源',
  },
  subMenu: [
    TechWhitepaperConfig,
    EconomyWhitepaperConfig,
    DarkWalletConfig,
    WikiConfig,
    {
      name: {
        en: GithubConfig.name,
        zh: GithubConfig.name,
      },
      href: {
        en: GithubConfig.url,
        zh: GithubConfig.url,
      },
    },
    {
      name: {
        en: 'Testnet',
        zh: '测试网络',
      },
      href: {
        en: 'https://poc4.phala.network/polkadotjs/#/explorer',
        zh: 'https://poc4.phala.network/polkadotjs/#/explorer',
      },
    },
    ExplorerConfig,
    {
      name: {
        en: 'Medium',
        zh: 'Medium',
      },
      href: {
        en: 'https://medium.com/phala-network',
        zh: 'https://medium.com/phala-network',
      },
    },
  ],
}

export const TechnologyConfig = {
  name: {
    en: 'Technology',
    zh: '技术',
  },
  href: {
    en: '/technology',
    zh: '/technology',
  },
}

export const KhalaConfig = {
  name: {
    en: 'Khala',
    zh: 'Khala',
  },
  href: {
    en: '/khala',
    zh: '/khala',
  },
}

export const PHAConfig = {
  name: {
    en: 'What is PHA',
    zh: '了解 PHA',
  },
  href: {
    en: '/pha',
    zh: '/pha',
  },
}

export const LearnMoreConfig = {
  name: {
    en: 'Learn More',
    zh: '了解更多',
  },
  href: {
    en: 'https://medium.com/phala-network/phalas-kusama-slot-auction-strategy-34cb93e07f3a',
    zh: 'https://mp.weixin.qq.com/s/1iaLE_8Q2LjlgUsxW6LtWA',
  },
}

export const CrowdloanConfig = {
  name: {
    en: 'Join Crowdloan (Coming)',
    zh: '参与众贷（即将到来）',
  },
  href: {
    en: '#',
    zh: '#',
  },
}

export const SlotAuctionConfig = {
  name: {
    en: 'Slot Auction',
    zh: '插槽竞拍',
  },
  href: {
    en: '/khala',
    zh: '/khala',
  },
}


export const MenuConfig: {
  name: { [key: string]: string }
  subMenu?: {
    name: { [key: string]: string }
    href: { [key: string]: string }
  }[]
  href?: { [key: string]: string }
}[] = [KhalaConfig, PHAConfig, TechnologyConfig, MaintainMenuConfig, ResourcesMenuConfig]

const config = {}

export default config
