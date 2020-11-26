import { EconomyWhitepaperConfig } from './EconomyWhitepaperConfig'
import { GithubConfig } from './GithubConfig'
import { WikiConfig } from './WikiConfig'

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

export const MaintainMenuConfig = {
  name: {
    en: 'Maintain',
    zh: '参与',
  },
  subMenu: [
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
        en: 'https://app.phala.network',
        zh: 'https://app.phala.network',
      },
    },
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
        zh: '抵押领奖',
      },
      href: {
        en: 'https://stakedrop-claim.phala.network/',
        zh: 'https://stakedrop-claim.phala.network/',
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

export const MenuConfig: {
  name: { [key: string]: string }
  subMenu?: {
    name: { [key: string]: string }
    href: { [key: string]: string }
  }[]
  href?: { [key: string]: string }
}[] = [PHAConfig, TechnologyConfig, MaintainMenuConfig, ResourcesMenuConfig]

const config = {}

export default config
