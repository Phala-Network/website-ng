import React from 'react'
import { TechWhitepaperConfig } from '../../../config'
import { EconomyWhitepaperConfig } from '../../../config/EconomyWhitepaperConfig'
import Button from '../../Button'
import I18n from '../../I18n'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'

type Props = {}

const CloudSection: React.FC<Props> = () => {
  const descriptionText = {
    en:
      'Raw-data-protected Data processing Confidential Smart Contract for DApps and DeFi',
    zh: '安全、不暴露隐私的数据处理，为Defi和Dapp提供秘密智能合约服务',
  }

  const titleText = {
    en: ['Decentralized', 'Privacy', 'Computing Cloud'],
    zh: ['分布式隐私计算云'],
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
