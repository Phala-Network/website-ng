export const TimelineSectionConfig = {
  doneTitle: { zh: '已完成', en: "What we've done" },
  doingTitle: {
    en: 'What we’re doing',
    zh: '进行中',
  },
  timeline: {
    done: [
      {
        year: 2018,
        quarter: 4,
        content: {
          en: ['Phala Team was founded'],
          zh: ['Phala团队成立，确定项目方向'],
        },
      },
      {
        year: 2019,
        quarter: 2,
        content: {
          en: ['Built a strong community in China'],
          zh: ['在中国开始建立社区'],
        },
      },
      {
        year: 2019,
        quarter: 3,
        content: {
          en: ['Whitepaper model', 'Web3 Foundation Grant for pLIBRA'],
          zh: [
            '发布技术白皮书',
            'Phala 旗下首个产品 pLIBRA 获得 Web3 基金会 Grant 奖金',
          ],
        },
      },
      {
        year: 2019,
        quarter: 4,
        content: {
          en: ['Hang Yin was entitled with Polkadot', 'Ambassador China'],
          zh: ['尹航成为波卡中国大使'],
        },
      },
      {
        year: 2020,
        quarter: 1,
        content: {
          en: ['Economics model', 'Web3 Foundation Grant for W3A'],
          zh: ['发布经济白皮书', '通过Web3 Analytics再次获得获得Grant资助'],
        },
      },
      {
        year: 2020,
        quarter: 2,
        content: {
          en: ['Testnet PoC-1', 'KSM x PHA Stakedrop'],
          zh: ['Phala POC-1 测试网上线', '完成“抵押空投”活动'],
        },
      },
      {
        year: 2020,
        quarter: 3,
        content: {
          en: ['Testnet Rorschach', 'Kusama Darkpool development kickoff'],
          zh: [
            'Phala POC-2 “罗夏测试网” 上线',
            '受Kusama社区委托，与社区合作开发去中心化暗池协议',
          ],
        },
      },
    ],
    doing: [
      {
        year: 2020,
        quarter: 4,
        content: {
          en: ['Testnet Vendetta', ' Canary launch: Darth Vader'],
          zh: [
            '上线 Phala POC-3 “Vendetta测试网”',
            '上线 预备主网 Darth Vader',
          ],
        },
      },
      {
        year: 2021,
        newest: true,
        content: {
          en: [
            {
              title: 'Kusama parachain auction',
              text: [
                'Launch Phala on Kusama',
                'Decentralize Phala phase by phase',
              ],
            },
            {
              title: 'Polkadot parachain auction',
              text: ['Launch Phala on Polkadot'],
            },
          ],
          zh: [
            {
              title: '第一批Kusama Slot Auction 事件后',
              text: [
                'Phala Network成为Kusama平行链',
                '从POA(权限化管理)到去中心化状态过度',
              ],
            },
            {
              title: '第一批Polkadot Slot Auction 事件后',
              text: [
                'Phala Network成为Polkadot平行链',
                '从Kusama平行链迁移至Polkadot平行链',
              ],
            },
          ],
        },
      },
    ],
  },
}
