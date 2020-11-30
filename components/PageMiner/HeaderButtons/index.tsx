import React from 'react'
import styles from './index.module.scss'
import DetailPageHeaderButtons from '../../DetailPageHeaderButtons'
import DetailPageButton from '../../DetailPageButton'
import { WikiConfig } from '../../../config/WikiConfig'
import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'

type Props = {}

const HeaderButtons: React.FC<Props> = (props) => {
  return (
    <DetailPageHeaderButtons>
      <DetailPageButton
        className={styles.btn1}
        type='link'
        href={'https://wiki.phala.network/en-us/docs/poc3/'}
        text={{
          en: 'Mining Pool Protocol',
          zh: '矿池协议',
        }}
      />

      <DetailPageButton
        className={styles.btn2}
        type='link'
        href={'https://wiki.phala.network/en-us/docs/poc3/'}
        text={{
          en: 'Mining Tutorial',
          zh: '挖矿教程',
        }}
      />

      <DetailPageButton className={styles.btn3} type='link' {...WikiConfig} />

      <DetailPageButton
        className={styles.btn4}
        type='link'
        {...EconomyWhitepaperConfig}
      />
    </DetailPageHeaderButtons>
  )
}

export default HeaderButtons
