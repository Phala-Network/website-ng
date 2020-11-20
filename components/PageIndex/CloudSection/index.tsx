import React from 'react'
import { EconomyWhitepaperConfig, TechWhitepaperConfig } from '../../../config'
import Button from '../../Button'
import I18n from '../../I18n'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'

type Props = {}

const CloudSection: React.FC<Props> = () => {
  const descriptionText = {
    en:
      'Raw-data-protected Data processing Confidential Smart Contract for DApps and DeFi',
    zh: '原始数据保护数据处理 DApps 和 DeFi 的保密智能合约',
  }

  const titleText = {
    en: ['Decentralized', 'Privacy', 'Computing Cloud'],
    zh: ['Decentralized', 'Privacy', 'Computing Cloud'],
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
