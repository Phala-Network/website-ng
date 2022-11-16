import { BountyConfig } from './BountyConfig'
import { EconomyWhitepaperConfig } from './EconomyWhitepaperConfig'
import { GithubConfig } from './GithubConfig'
import { JoinUsConfig } from './JoinUsConfig'
import { MediaKitConfig } from './MediaKitConfig'
import { PhatContractConfig } from './PhatContractConfig'
import { SecureEnclaveConfig } from './SecureEnclaveConfig'
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

export const GovernanceConfig = {
  name: {
    en: 'Governance',
    zh: '治理'
  },
  href: {
    en: 'https://khala.subsquare.io/',
    zh: 'https://khala.subsquare.io/'
  }
}

export const KhalaExplorerConfig = {
  name: {
    en: 'Explorer',
    zh: '区块链浏览器'
  },
  href: {
    en: 'https://khala.subscan.io/',
    zh: 'https://khala.subscan.io/'
  }
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
        en: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpoc5.phala.network%2Fws#/explorer',
        zh: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpoc5.phala.network%2Fws#/explorer'
      }
    },
    ExplorerConfig,
    {
      name: {
        en: 'Brand',
        zh: '品牌'
      },
      href: {
        en: 'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq',
        zh: 'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq'
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

export const FooterAboutUsConfig = {
  name: {
    en: 'About Us',
    zh: '关于我们'
  },
  subMenu: [
    JoinUsConfig,
    MediaKitConfig,
    WikiConfig,
    {
      name: {
        en: 'Phala Explorer',
        zh: 'Phala 区块链浏览器'
      },
      href: {
        en: 'https://phala.subscan.io/',
        zh: 'https://phala.subscan.io/'
      }
    },
    {
      name: {
        en: 'Khala Explorer',
        zh: 'Khala 区块链浏览器'
      },
      href: {
        en: 'https://khala.subscan.io/',
        zh: 'https://khala.subscan.io/'
      }
    },

    {
      name: {
        en: 'Responsible Disclosure',
        zh: '责任披露'
      },
      href: {
        en: 'https://www.phala.network/zh/Phala-Network-Responsible-Disclosure.pdf',
        zh: 'https://www.phala.network/zh/Phala-Network-Responsible-Disclosure.pdf'
      }
    }
  ]
}

export const DevelopersConfig = {
  name: {
    en: 'Developers',
    zh: '开发'
  },
  subMenu: [
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
    PhatContractConfig,
    {
      name: {
        en: 'Secure Worker',
        zh: 'Secure Worker'
      },
      href: {
        en: 'https://wiki.phala.network/en-us/mine/khala-mining/khala-pre-mainnet-mining-guide/',
        zh: 'https://wiki.phala.network/en-us/mine/khala-mining/khala-pre-mainnet-mining-guide/'
      }
    },
    BountyConfig
  ]
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
        en: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi.phala.network%2Fws#/democracy',
        zh: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi.phala.network%2Fws#/democracy'
      }
    },
    {
      name: {
        en: 'Launch Plan',
        zh: '上线计划'
      },
      href: {
        en: 'https://phalanetwork.notion.site/Phala-Network-Launch-Plan-and-Status-637b6486236f4a1c93a56af320e0ff5b',
        zh: 'https://phalanetwork.notion.site/Phala-Network-Launch-Plan-and-Status-637b6486236f4a1c93a56af320e0ff5b'
      }
    },
    {
      name: {
        en: 'Core Builders',
        zh: '核心贡献者'
      },
      href: {
        en: '/aboutUs',
        zh: '/aboutUs'
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

export const ProductConfig = {
  name: {
    en: 'Products',
    zh: '产品'
  },
  subMenu: [
    PhatContractConfig,
    {
      name: {
        en: 'PhalaWorld',
        zh: 'PhalaWorld'
      },
      href: {
        en: 'https://phala.world/',
        zh: 'https://phala.world/'
      }
    },
    {
      name: {
        en: 'SubBridge',
        zh: 'SubBridge'
      },
      href: {
        en: 'https://subbridge.io/',
        zh: 'https://subbridge.io/'
      }
    },
    {
      name: {
        en: 'Phala App',
        zh: 'Phala App'
      },
      href: {
        en: 'https://app.phala.network/',
        zh: 'https://app.phala.network/'
      }
    },
    {
      name: {
        en: 'Web 3 Analytics',
        zh: 'Web 3 Analytics'
      },
      href: {
        en: 'https://3analytics.io/',
        zh: 'https://3analytics.io/'
      }
    }
  ]
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
    JoinUsConfig,
    MediaKitConfig,
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

export const HackathonConfig = {
  name: {
    en: 'Hackathon',
    zh: 'Hackathon'
  },
  subMenu: [
    {
      name: {
        en: 'amsterDOT-2022',
        zh: 'amsterDOT-2022'
      },
      href: {
        en: 'https://github.com/Phala-Network/amsterDOT-2022',
        zh: 'https://github.com/Phala-Network/amsterDOT-2022'
      }
    },
    {
      name: {
        en: 'Encode-2021',
        zh: 'Encode-2021'
      },
      href: {
        en: 'https://github.com/Phala-Network/Encode-Hackathon-2021',
        zh: 'https://github.com/Phala-Network/Encode-Hackathon-2021'
      }
    }
  ]
}

export const TechnologyConfig = {
  name: {
    en: 'Technology',
    zh: '技术'
  },
  subMenu: [
    SecureEnclaveConfig,
    {
      name: {
        en: 'Phat Contract',
        zh: 'Phat Contract'
      },
      href: {
        en: 'https://wiki.phala.network/en-us/general/development/fat-contract/',
        zh: 'https://wiki.phala.network/en-us/general/development/fat-contract/'
      }
    },
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
    BountyConfig,
    {
      name: {
        en: 'Technical Paper',
        zh: 'Technical Paper'
      },
      href: {
        en: 'https://files.phala.network/phala-paper.pdf',
        zh: 'https://files.phala.network/phala-paper.pdf'
      }
    }
  ]
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
    en: 'Roadmap',
    zh: 'Roadmap'
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
    zh: 'https://medium.com/phala-network/guidance-how-to-check-and-claim-your-rewards-c6305e7ae5cf'
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
}[] = [
  KhalaConfig,
  // PHAConfig,
  TechnologyConfig,
  HackathonConfig,
  ProductConfig,
  CommunityConfig,
  AboutUsConfig
]

const config = {}

export default config
