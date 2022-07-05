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

export const CommunityConfig = {
  name: {
    en: 'Community',
    zh: '社区'
  },
  subMenu: [
    {
      name: {
        en: 'Governance',
        zh: '治理'
      },
      href: {
        en:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi.phala.network%2Fws#/democracy',
        zh:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi.phala.network%2Fws#/democracy'
      }
    },
    {
      name: {
        en: 'Launch Plan',
        zh: 'Launch Plan'
      },
      href: {
        en:
          'https://phalanetwork.notion.site/Phala-Network-Launch-Plan-and-Status-637b6486236f4a1c93a56af320e0ff5b',
        zh:
          'https://phalanetwork.notion.site/Phala-Network-Launch-Plan-and-Status-637b6486236f4a1c93a56af320e0ff5b'
      }
    },
    {
      name: {
        en: 'Core Builders',
        zh: '核心贡献者'
      },
      href: {
        en: 'https://www.phala.network/en/aboutUs',
        zh: 'https://www.phala.network/zh/aboutUs'
      }
    },
    {
      name: {
        en: 'Forum',
        zh: '论坛'
      },
      href: {
        en: 'https://forum.phala.network',
        zh: 'https://forum.phala.network'
      }
    },
    {
      name: {
        en: 'Ambassador Program',
        zh: '大使计划'
      },
      href: {
        en: 'https://github.com/Phala-Network/growth-program',
        zh: 'https://github.com/Phala-Network/growth-program'
      }
    }
  ]
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
    en: 'https://phala.subscan.io/',
    zh: 'https://phala.subscan.io/'
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

export const AboutUsConfig = {
  name: {
    en: 'About Us',
    zh: '关于我们'
  },
  subMenu: [
    WikiConfig,
    ExplorerConfig,
    {
      name: {
        en: 'Blog',
        zh: '博客'
      },
      href: {
        en: 'https://medium.com/phala-network',
        zh: 'https://medium.com/phala-network'
      }
    },
    {
      name: {
        en: 'Join Us',
        zh: '加入我们'
      },
      href: {
        en: 'http://linktr.ee/phalanetwork',
        zh: 'http://linktr.ee/phalanetwork'
      }
    },
    {
      name: {
        en: 'Media Kit',
        zh: 'Media Kit'
      },
      href: {
        en:
          'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq',
        zh:
          'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq'
      }
    },
    {
      name: {
        en: 'Careers',
        zh: 'Careers'
      },
      href: {
        en: 'https://angel.co/company/phala-network',
        zh: 'https://angel.co/company/phala-network'
      }
    }
  ]
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
        en:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpoc5.phala.network%2Fws#/explorer',
        zh:
          'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpoc5.phala.network%2Fws#/explorer'
      }
    },
    ExplorerConfig,
    {
      name: {
        en: 'Brand',
        zh: '品牌'
      },
      href: {
        en:
          'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq',
        zh:
          'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq'
      }
    },
    {
      name: {
        en: 'Careers',
        zh: '职位'
      },
      href: {
        en: 'https://angel.co/company/phala-network',
        zh: 'https://angel.co/company/phala-network'
      }
    },
    {
      name: {
        en: 'Responsible Disclosure',
        zh: '责任披露'
      },
      href: {
        en: 'https://phala.network/en/Phala-Network-Responsible-Disclosure.pdf',
        zh: 'https://phala.network/zh/Phala-Network-Responsible-Disclosure.pdf'
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
    en:
      'https://medium.com/phala-network/guidance-how-to-check-and-claim-your-rewards-c6305e7ae5cf',
    zh:
      'https://medium.com/phala-network/guidance-how-to-check-and-claim-your-rewards-c6305e7ae5cf'
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
}[] = [KhalaConfig, PHAConfig, TechnologyConfig, CommunityConfig, AboutUsConfig]

const config = {}

export default config
