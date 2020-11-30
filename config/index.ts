import { EconomyWhitepaperConfig } from './EconomyWhitepaperConfig'
import { GithubConfig } from './GithubConfig'
import { WikiConfig } from './WikiConfig'

export const TechWhitepaperConfig = {
  name: {
    en: 'Techical Whitepaper',
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
    en: 'Secret Wallet',
    zh: '暗钱包',
  },
  href: {
    en: 'https://app.phala.network',
    zh: 'https://app.phala.network',
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
        en: 'https://app.phala.network/legacy.html',
        zh: 'https://app.phala.network/legacy.html',
      },
    },
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
