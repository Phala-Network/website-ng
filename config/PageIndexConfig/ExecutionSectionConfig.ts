export const ExecutionSectionConfig = {
  buttonText: {
    en: 'Learn more about developers',
    zh: '了解更多关于开发者的信息',
  },

  titleText: {
    en: ['Temperproofing, ', 'unattackable', 'execution'],
    zh: ['TEE', '提供去信任化环境'],
  },

  descriptionText: {
    en:
      'Empowered by Trusted Execution Envitonment and secure from system-level attacks',
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
          'Your raw data and execution will be processed in an enclave isolated in CPUs which is unattackable through softwares or systems.',
        zh: '通用CPU的TEE环境为数据提供安全隔离',
      },
    },
    {
      image: '/images/indexPage/executionSection/Icon-trustworthy.svg',
      name: {
        en: 'Trustworthy',
        zh: '去信任化',
      },
      description: {
        en:
          'Codes and data can only be processed after authorization and on-chain identity verification.',
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
          'Phala smart contract is compatible to multiple manufacturers including Intel and AMD etc.',
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
          'Data storage and processing be secure and stable based on decentralized storage and random task delivery algorithsm.',
        zh: '海量TEE计算节点中随机发放计算任务，给你前所未有的安全性',
      },
    },
  ],
}
