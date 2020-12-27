export const ExecutionSectionConfig = {
  buttonText: {
    en: 'MORE ABOUT THE DEVELOPERS',
    zh: '了解更多关于开发者的信息',
  },

  titleText: {
    en: ['Tamper-proof, ', 'trustless', 'execution'],
    zh: ['TEE', '提供去信任化环境'],
  },

  descriptionText: {
    en: 'Empowered by TEE, Phala is secure against system-level attacks',
    zh: '硬件级隔离是兼顾信任和保密的关键',
  },

  list: [
    {
      image: '/images/indexPage/executionSection/Icon-isolated.svg',
      name: {
        en: 'Isolated',
        zh: '硬件级安全隔离',
      },
      description: {
        en:
          'Your sensitive data is only processed in hardware secure enclaves isolated from the rest of the world.',
        zh: '通用CPU的TEE环境为数据提供安全隔离',
      },
    },
    {
      image: '/images/indexPage/executionSection/Icon-trustworthy.svg',
      name: {
        en: 'Trustless',
        zh: '去信任化',
      },
      description: {
        en:
          'The integrity of code and data is guaranteed. Only authorization actions are allowed.',
        zh: '区块链与TEE远程验证互相确认，保障代码和数据可信',
      },
    },
    {
      image: '/images/indexPage/executionSection/Icon-compatible.svg',
      name: {
        en: 'Compatible',
        zh: '支持多种TEE标准',
      },
      description: {
        en:
          'Phala confidential contract is compatible to multiple standards including Intel SGX and AMD SEV, etc.',
        zh: '通过兼容多种TEE标准，包括Intel SGX、AMD SEV等标准',
      },
    },
    {
      image: '/images/indexPage/executionSection/Icon-decentralized.svg',
      name: {
        en: 'Decentralized',
        zh: '分布式隐私计算云',
      },
      description: {
        en:
          'Secure and reliable data storage and processing based on decentralized storage and our random scheduling algorithm.',
        zh: '海量TEE计算节点中随机发放计算任务，给你前所未有的安全性',
      },
    },
  ],
}
