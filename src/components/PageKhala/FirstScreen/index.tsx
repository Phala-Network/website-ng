import { CrowdloanConfig, LearnMoreConfig } from '../../../config'
import Button from '../../Button'
import I18n from '../../I18n'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {}

const FirstScreen: React.FC<Props> = () => {
  const title = {
    en: ['Khala Network'],
    zh: ['Khala Network']
  }

  const subtitleFirstLine = {
    en: ['Kusama Parachain'],
    zh: ['Kusama 上的隐私平行链']
  }

  const subtitleSecondLine = {
    en: ['Phala’s Canary Network'],
    zh: ['Phala 的预备主网']
  }

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={styles.bg}></div>
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          <I18n render={(str: string) => <div key={str}>{str}</div>} {...title}></I18n>
        </div>
        <div className={styles.subtitle}>
          <I18n {...subtitleFirstLine}></I18n><br />
          <I18n {...subtitleSecondLine}></I18n>
        </div>
        <div className={styles.description}>
          <p>
            <I18n
              en={<>K-PHA will be Khala’s native token, swappable with ERC20-PHA and Phala native PHA at <span className={styles.highlight}>1:1</span>.</>}
              zh={<>Khala Network 将会以 K-PHA 作为网络通证，K-PHA 是 PHA 通证的 Kusama 版本，与 ERC20-PHA 和主网 PHA 可以进行 <span className={styles.highlight}>1:1</span> 兑换。</>}
            />
          </p>
        </div>
        <div className={styles.buttons}>
          <Button
            text={LearnMoreConfig.name}
            href={LearnMoreConfig.href}
            className={styles.button}
            type='link'
            color='primary'></Button>
          <Button
            text={CrowdloanConfig.name}
            href={CrowdloanConfig.href}
            className={styles.button}
            hasArrowIcon
            type='link'
            color='gray'></Button>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen
