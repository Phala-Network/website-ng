export const ContractSectionConfig = {
  button: {
    en: 'Learn More',
    zh: '了解详情'
  },

  title: {
    en: ['Fat/Phat Contract'],
    zh: ['Fat/Phat Contract']
  },

  description: {
    en: 'Secure off-chain computing model with Fat Contract',
    zh: 'Phala Network 基于 Fat Contract 实现链下计算模型'
  },

  list: [
    {
      image: '/images/indexPage/contractSection/icon-credible.svg',
      name: {
        en: 'Support Compute-Intensive Tasks',
        zh: '支持计算密集型任务'
      },
      description: {
        en: 'Even just a single contract can fully utilize the computing power of all workers, no need to worry about blocking the entire blockchain.',
        zh: '单个合约也可以充分利用 Worker 的计算能力，无需担心阻塞整个区块链。'
      }
    },
    {
      image: '/images/indexPage/contractSection/icon-verifieable.svg',
      name: {
        en: 'Low Latency',
        zh: '低延迟'
      },
      description: {
        en: 'Support off-chain Query, achieving millisecond-level read and write responses, making it a perfect choice to deploy Metaverse and game services.',
        zh: '不涉及链上状态改变的请求，可实现毫秒级响应，是游戏和元宇宙最佳选择。'
      }
    },
    {
      image: '/images/indexPage/contractSection/icon-interoperatable.svg',
      name: {
        en: 'Internet Services Access',
        zh: '访问互联网服务'
      },
      description: {
        en: 'Off-chain secure workers can safely execute asynchronous network access in Fat Contract.',
        zh: '链下 Secure Worker 可以安全地执行 Fat Contract 中的异步网络请求。'
      }
    },
    {
      image: '/images/indexPage/contractSection/icon-cross-chain.svg',
      name: {
        en: 'Cross-chain Computing',
        zh: '跨链计算'
      },
      description: {
        en: 'As a Substrate-based blockchain, Phala aims to serve any blockchain through Polkadot XCMP.',
        zh: '基于 Substrate 开发，通过 Polkadot 的 XCMP 为其他区块链提供保密合约服务'
      }
    }
  ]
}
