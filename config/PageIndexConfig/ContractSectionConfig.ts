export const ContractSectionConfig = {
  button: {
    en: 'Check our Github',
    zh: '来看看我们的 Github',
  },

  title: {
    en: ['Privacy-preserving', 'Smart Contract'],
    zh: ['具有秘密的智能合约'],
  },

  description: {
    en: 'Built on TEE-Blockchain Hybrid Architecture',
    zh: 'Phala Network通过TEE-区块链混合架构实施机密智能合约',
  },

  list: [
    {
      image: '/images/indexPage/contractSection/icon-credible.svg',
      name: {
        en: 'Credible',
        zh: '保留秘密且可被验证',
      },
      description: {
        en:
          'Remote attestation is required for each node as the proof to be TEE-enabled and privacy-preserving.',
        zh: '远程认证保证了智能合约的可靠执行，同时可以秘密地保存数据',
      },
    },
    {
      image: '/images/indexPage/contractSection/icon-verifieable.svg',
      name: {
        en: 'Verifieable',
        zh: '非验证则不可信',
      },
      description: {
        en: 'All the codes and execution are verifiable on-chain.',
        zh: 'Phala上的合约执行均可追溯到TEE证书，在区块链上可供用户验证',
      },
    },
    {
      image: '/images/indexPage/contractSection/icon-interoperatable.svg',
      name: {
        en: 'Interoperatable',
        zh: '可组合性和互操作性',
      },
      description: {
        en:
          'The 1st smart contract that is highly-compatible with contracts from other blockchain or ecosystem.',
        zh: '首创具有可组合性和互操作性的秘密智能合约协议',
      },
    },
    {
      image: '/images/indexPage/contractSection/icon-cross-chain.svg',
      name: {
        en: 'Cross-chain',
        zh: '跨链计算',
      },
      description: {
        en:
          'Phala will serve all blockchains through through Polkadot XCMP and Substrate-based cross-chain technology.',
        zh: '基于Substrate开发，通过Polkadot的XCMP为其他区块链提供秘密合约服务',
      },
    },
  ],
}
