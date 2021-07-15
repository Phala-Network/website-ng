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
          zh: 'https://www.yuque.com/docs/share/2d2ec132-e6fc-44c0-a286-882f0d49c55e'
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
