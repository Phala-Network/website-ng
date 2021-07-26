import { EconomyWhitepaperConfig } from './EconomyWhitepaperConfig'
import { GithubConfig } from './GithubConfig'
import { WikiConfig } from './WikiConfig'

export const TechWhitepaperConfig = {
  name: {
    en: 'Technical Whitepaper',
    zh: '技术白皮书'
  },
  href: {
    en: 'https://files.phala.network/phala-paper.pdf',
    zh: 'https://files.phala.network/phala-paper.pdf'
  }
}

export const MaintainMenuConfig = {
  name: {
    en: 'Participate',
    zh: '参与'
  },
  subMenu: [
    {
      name: {
        en: 'Miner',
        zh: '矿工'
      },
      href: {
        en: '/miner',
        zh: '/miner'
      }
    },
    {
      name: {
        en: 'Node',
        zh: '节点'
      },
      href: {
        en: '/node',
        zh: '/node'
      }
    },
    {
      name: {
        en: 'Community',
        zh: '社区'
      },
      href: {
        en: '/community',
        zh: '/community'
      }
    },
    {
      name: {
        en: 'About Us',
        zh: '关于我们'
      },
      href: {
        en: '/aboutUs',
        zh: '/aboutUs'
      }
    }
  ]
}

export const ExplorerConfig = {
  name: {
    en: 'Explorer',
    zh: '区块链浏览器'
  },
  href: {
    en: 'https://khala.subscan.io',
    zh: 'https://khala.subscan.io'
  }
}

export const DarkWalletConfig = {
  name: {
    en: 'PhaSe Wallet',
    zh: '暗钱包'
  },
  href: {
    en: 'https://poc3.phala.network',
    zh: 'https://poc3.phala.network'
  }
}

export const ResourcesMenuConfig = {
  name: {
    en: 'Resources',
    zh: '资源'
  },
  subMenu: [
    TechWhitepaperConfig,
    EconomyWhitepaperConfig,
    WikiConfig,
    {
      name: {
        en: GithubConfig.name,
        zh: GithubConfig.name
      },
      href: {
        en: GithubConfig.url,
        zh: GithubConfig.url
      }
    },
    {
      name: {
        en: 'Testnet',
        zh: '测试网络'
      },
      href: {
        en: 'https://poc4.phala.network/polkadotjs/#/explorer',
        zh: 'https://poc4.phala.network/polkadotjs/#/explorer'
      }
    },
    ExplorerConfig,
    {
      name: {
        en: 'Careers',
        zh: '职位'
      },
      href: {
        en: 'https://angel.co/company/phala-network',
        zh: 'https://angel.co/company/phala-network'
      }
    }
  ]
}

export const TechnologyConfig = {
  name: {
    en: 'Technology',
    zh: '技术'
  },
  href: {
    en: '/technology',
    zh: '/technology'
  }
}

export const KhalaConfig = {
  name: {
    en: 'Khala',
    zh: 'Khala'
  },
  href: {
    en: '/khala',
    zh: '/khala'
  }
}

export const PHAConfig = {
  name: {
    en: 'What is PHA',
    zh: '了解 PHA'
  },
  href: {
    en: '/pha',
    zh: '/pha'
  }
}

export const LearnMoreConfig = {
  name: {
    en: 'Learn More',
    zh: '了解更多'
  },
  href: {
    en: 'https://github.com/orgs/Phala-Network/projects/11',
    zh: 'https://github.com/orgs/Phala-Network/projects/12'
  }
}

export const CrowdloanConfig = {
  name: {
    en: 'Crowdloan Claim',
    zh: '众贷领奖'
  },
  href: {
    en: 'https://medium.com/phala-network/guidance-how-to-check-and-claim-your-rewards-c6305e7ae5cf',
    zh: 'https://mp.weixin.qq.com/s/RH1HUFr_wKS-d59Iw2YiyQ'
  }
}

export const PhalaAppConfig = {
  name: {
    en: 'Phala App',
    zh: 'Phala App'
  },
  href: {
    en: 'https://app.phala.network',
    zh: 'https://app.phala.network'
  }
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
