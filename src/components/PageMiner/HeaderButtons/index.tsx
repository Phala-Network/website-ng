import React from 'react'
import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import DetailPageButton from '../../DetailPageButton'
import DetailPageHeaderButtons from '../../DetailPageHeaderButtons'
import * as styles from './index.module.scss'

type Props = {}

const HeaderButtons: React.FC<Props> = (props) => {
  return (
    <DetailPageHeaderButtons>
      <DetailPageButton
        className={styles.btn2}
        type="link"
        href={{
          en: 'https://wiki.phala.network/en-us/docs/khala-mining/',
          zh: 'https://wiki.phala.network/zh-cn/docs/khala-mining/'
        }}
        text={{
          en: 'Mining Tutorial',
          zh: '挖矿教程'
        }}
      />

      <DetailPageButton
        className={styles.btn4}
        type="link"
        {...EconomyWhitepaperConfig}
      />
    </DetailPageHeaderButtons>
  )
}

export default HeaderButtons
