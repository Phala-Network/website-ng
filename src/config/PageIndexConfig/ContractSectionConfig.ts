export const ContractSectionConfig = {
  button: {
    en: 'Check our Github',
    zh: '来看看我们的 Github'
  },

  title: {
    en: ['Privacy-preserving', 'Smart Contract'],
    zh: ['隐私保护智能合约']
  },

  description: {
    en: 'Built on TEE-Blockchain Hybrid Architecture',
    zh: 'Phala Network 基于TEE-区块链混合架构实现保密合约'
  },

  list: [
    {
      image: '/images/indexPage/contractSection/icon-credible.svg',
      name: {
        en: 'Credible',
        zh: '无需信任的保秘'
      },
      description: {
        en:
          'Remote attestation guarantees the contract runs right inside a trustless and confidential environment.',
        zh: '远程认证保证了智能合约的可靠执行，同时可以秘密地使用数据'
      }
    },
    {
      image: '/images/indexPage/contractSection/icon-verifieable.svg',
      name: {
        en: 'Verifiable',
        zh: '非验证则不可信'
      },
      description: {
        en: 'All the code and execution are verifiable on-chain.',
        zh: 'Phala上的合约执行均可追溯到TEE证书，在区块链上可供用户验证'
      }
    },
    {
      image: '/images/indexPage/contractSection/icon-interoperatable.svg',
      name: {
        en: 'Interoperable',
        zh: '可组合与互操作'
      },
      description: {
        en:
          'Smart contract is 90% less useful without composability. Phala is the only confidential contract protocol that keeps interoperability and composability.',
        zh: '失去可组合与互操作性，智能合约便毫无意义。Phala 保留了它们，并赋予了保密性。'
      }
    },
    {
      image: '/images/indexPage/contractSection/icon-cross-chain.svg',
      name: {
        en: 'Cross-chain',
        zh: '跨链计算'
      },
      description: {
        en:
          'As a Substrate-based blockchain, Phala aim to serve any blockchain through Polkadot XCMP.',
        zh: '基于Substrate开发，通过Polkadot的XCMP为其他区块链提供保密合约服务'
      }
    }
  ]
}
