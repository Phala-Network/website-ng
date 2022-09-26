import { config as ContributorConfig } from '../Contributor/config'
import { config as CouncilConfig } from '../Council/config'

export const config = [
  {
    avatar: 'people1',
    name: {
      en: 'Hang Yin',
      zh: '尹航'
    },
    position: {
      en: 'Co-founder & Lead Developer',
      zh: '联合创始人 & 首席开发'
    },
    description: {
      en:
        'Council memeber. Former Senior Software Engineer at Google, leading projects of Mandarin speech recognition, voice search, and Gmail intelligent semantic assistant, with profound experience in artificial intelligence; B.S., Computer Science and Technology, Fudan University. ',
      zh:
        '议会成员。复旦大学计算机科学专业。前 Google 高级软件工程师，Google 中文语音识别、语音搜索项目负责人和 Gmail 智能语义助手项目负责人。'
    }
  },
  {
    avatar: 'people2',
    name: {
      en: 'Marvin Tong',
      zh: '佟林'
    },
    position: {
      en: 'Co-founder',
      zh: '联合创始人'
    },
    description: {
      en:
        'Council memeber. Investment Advisor of PAKA Fund, Co-organizer of Privacy Computing In China. Former Senior Product Manager at Tencent & Didi. PhalaWorld initiator.',
      zh:
        '议会成员。PAKA 基金投资顾问，隐私计算联盟 （PCIC）联合发起人，前腾讯&滴滴资深产品人，PhalaWorld 发起人。'
    }
  },
  {
    avatar: 'people3',
    name: {
      en: 'Zhe Wang',
      zh: '王喆'
    },
    position: {
      en: 'Co-founder',
      zh: '联合创始人'
    },
    description: {
      en:
        'Serial entrepreneur. Former CEO & CTO of Xiaohei AI Games & Haha AI Vending Mechine. Initial owner of 20+ patents including 3 blockchain patents. M.S., Computer Science and Technology, Huazhong University of Science and Technology.',
      zh:
        '华中科技大学计算机科学与技术专业本硕。连续创业者，小嘿科技和哈哈零售CTO&CEO。拥有3项区块链发明专利及20项国家专利。'
    }
  },
  {
    avatar: 'people4',
    name: {
      en: 'Jun Jiang',
      zh: '姜军'
    },
    position: {
      en: 'Co-founder',
      zh: '联合创始人'
    },
    description: {
      en:
        'Webmaster of RubyChina. Former CTO at KnewOne. Former Software Architect at DJI.',
      zh:
        'RubyChina 站长。前 KnewOne CTO，前大疆软件架构师。在技术圈影响力深厚。'
    }
  },
  ...ContributorConfig,
  ...CouncilConfig
]
