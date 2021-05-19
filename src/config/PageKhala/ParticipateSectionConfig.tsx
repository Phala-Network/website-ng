import * as React from 'react'
import TagA from '../../components/TagA'

export const ParticipateSectionConfig = [
  {
    icon: '/images/PageKhala/ParticipateSection/participant-icon-2.svg',
    title: {
      en: 'Follow Us!',
      zh: '关注我们'
    },
    description: {
      en: <>Join our <TagA href="https://discord.com/invite/myBmQu5">Discord</TagA>, <TagA href="https://twitter.com/PhalaNetwork">Twitter</TagA>, and <TagA href="https://t.me/phalanetwork">Telegram</TagA> for timely updates and news.</>,
      zh: '关注我们的公众号“Phala 可信网络”，获取动态，加入社群。'
    }
  },
  {
    icon: '/images/PageKhala/ParticipateSection/participant-icon-1.svg',
    title: {
      en: 'Learn',
      zh: '了解更多'
    },
    description: {
      en: <><TagA href="https://kusama.network/auctions">Learn</TagA> how Crowdloan works.</>,
      zh: <><TagA href="https://kusama.network/auctions">了解</TagA>众贷如何运转。</>
    }
  },
  {
    icon: '/images/PageKhala/ParticipateSection/participant-icon-3.svg',
    title: {
      en: 'Prep your KSM: Unbond',
      zh: '准备KSM： 解除抵押'
    },
    description: {
      en: <><TagA href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/staking/actions">Unbond</TagA> your KSM soon if they’re already bonded! (At least 7 days before the Crowdloan starts).</>,
      zh: <>如果您的KSM已抵押，则您需要提前至少7天在众贷开始日期前<TagA href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/staking/actions">解除</TagA>对KSM的抵押。</>
    }
  },
  {
    icon: '/images/PageKhala/ParticipateSection/participant-icon-4.svg',
    title: {
      en: 'JUMP IN!',
      zh: '参与'
    },
    description: {
      en: 'When the time comes, get in on the action.',
      zh: '当众贷启动时，请在Phala Network官网上寻找参与入口。'
    }
  }
]
