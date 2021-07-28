import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import { WikiConfig } from '../../../config/WikiConfig'
import DetailPageButton from '../../DetailPageButton'
import DetailPageHeaderButtons from '../../DetailPageHeaderButtons'
import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const HeaderButtons: React.FC<Props> = (props) => {
  return (
    <DetailPageHeaderButtons>
      <DetailPageButton
        className={styles.btn1}
        type='link'
        href={{
          en: 'https://t.me/phalaminer',
          zh: 'https://mp.weixin.qq.com/s/L2faw5ljbLI8gAWeU_I0Ew'
        }}
        text={{
          en: 'Telegram Group',
          zh: '交流群'
        }}
      />

      <DetailPageButton
        className={styles.btn2}
        type='link'
        href={{
          en: 'https://wiki.phala.network/en-us/docs/poc3/',
          zh: 'https://www.yuque.com/phala/mining/'
        }}
        text={{
          en: 'Mining Tutorial',
          zh: '挖矿教程'
        }}
      />

      <DetailPageButton
        className={styles.btn3}
        type='link'
        {...WikiConfig}
        href={{
          en: 'https://wiki.phala.network/en-us/docs/poc3/',
          zh: 'https://wiki.phala.network/zh-cn/docs/poc3/'
        }}
      />

      <DetailPageButton
        className={styles.btn4}
        type='link'
        {...EconomyWhitepaperConfig}
      />
    </DetailPageHeaderButtons>
  )
}

export default HeaderButtons
