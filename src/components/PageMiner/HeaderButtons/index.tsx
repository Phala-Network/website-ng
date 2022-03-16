import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import DetailPageButton from '../../DetailPageButton'
import DetailPageHeaderButtons from '../../DetailPageHeaderButtons'
import React from 'react'
import * as styles from './index.module.scss'

type Props = {}

const HeaderButtons: React.FC<Props> = (props) => {
  return (
    <DetailPageHeaderButtons>
      <DetailPageButton
        className={styles.btn2}
        type="link"
        href={{
          en:
            'https://wiki.phala.network/en-us/mine/khala-mining/khala-pre-mainnet-mining-guide/',
          zh:
            'https://wiki.phala.network/en-us/mine/khala-mining/khala-pre-mainnet-mining-guide/'
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
