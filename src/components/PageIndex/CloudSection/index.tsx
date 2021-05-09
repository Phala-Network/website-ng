import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import { TechWhitepaperConfig } from '../../../config'
import Button from '../../Button'
import I18n from '../../I18n'
import React from 'react'
import SectionHeader from '../../SectionHeader'
import * as styles from './index.module.scss'

type Props = {}

const CloudSection: React.FC<Props> = () => {
  const descriptionText = {
    en:
      'General-Purpose Confidential Smart Contract for DApps and DeFi',
    zh: '安全、不暴露隐私的通用计算，为 Defi 和 Dapp 提供保密智能合约服务'
  }

  const titleText = {
    en: ['Trustless', 'Privacy-Preserving', 'Cloud Computing'],
    zh: ['去信任化隐私计算云']
  }

  return (
    <div className={styles.cloudSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-lg-6'>
              <SectionHeader
                color='gray'
                title={titleText}
                description={descriptionText}
              />
            </div>
            <div className='col-lg-6'>
              <div className={styles.buttons}>
                <Button
                  href={EconomyWhitepaperConfig.href}
                  text={EconomyWhitepaperConfig.name}
                  type='link'
                  color='gray'
                  hasArrowIcon></Button>

                <Button
                  href={TechWhitepaperConfig.href}
                  text={TechWhitepaperConfig.name}
                  type='link'
                  color='gray'
                  hasArrowIcon></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudSection
