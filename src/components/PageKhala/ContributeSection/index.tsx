import Button from '../../Button'
import I18n from '../../I18n'
import React from 'react'
import cn from 'classnames'

import Feature from './Feature'

import { ContributeSectionConfig } from '../../../config/PageKhala/ContributeSectionConfig'
import { CrowdloanConfig } from '../../../config'

import * as styles from './index.module.scss'

interface Props { }

const ContributionSection = (x: Props) => {
  return (
    <div className={styles.contributeSection}>
      <div className={styles.left}>
        <ul className={styles.featureList}>
          {ContributeSectionConfig.map((item, index) => (
            <Feature key={index} {...item} />
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <div className={styles.rightTop}>
            <I18n
              en={['Contribute to Khala']}
              zh={['在 Kusama']}
              render={(item: string, locale: string) => (
                <p className={cn(styles.title, { [styles.highlight]: locale === 'zh' })}>
                  {item}
                </p>
              )}
            />
            <I18n
              en={['in the']}
              zh={['平行链插槽拍卖中']}
              render={(item: string, locale: string) => (
                <p className={cn(styles.title, { [styles.highlight]: locale === 'zh' })}>
                  {item}
                </p>
              )}
            />
            <I18n
              en={['Kusama slot auction']}
              zh={['支持 Khala']}
              render={(item: string, locale: string) => (
                <p className={cn(styles.title, { [styles.highlight]: locale === 'en' })}>
                  {item}
                </p>
              )}
            />
            <p className={styles.description}>
              <I18n
                en="Khala Network will join the Kusama slot auction when the second slot auction opens. Khala will bid for an 8-period slot, which means Khala will lease the slot for 6 x 8 = 48 weeks."
                zh="Khala Network 从第 2 个插槽开始参与 Kusama 平行链插槽拍卖，将拍卖 8 个时间段的插槽槽位，即租赁期为 6 周*8=48 周。"
              />
            </p>
          </div>
          <div className={styles.rightBottom}>
            <Button
              text={CrowdloanConfig.name}
              href={CrowdloanConfig.href}
              className={styles.button}
              hasArrowIcon
              type='link'
              color='gray'></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributionSection
