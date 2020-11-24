import React from 'react'
import Button from '../../Button'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'
import { PHAConfig } from '../../../config'

type Props = {}

const FirstScreen: React.FC<Props> = () => {
  const title = {
    en: ['Phala Network', 'the pixalizer of', 'blockchain.'],
    zh: ['Phala Network', '给区块链打上马赛克'],
  }

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          <I18n render={(str) => <div key={str}>{str}</div>} {...title}></I18n>
        </div>
        <div className={styles.description}>
          <I18n
            en='Blockchain Confidentiality by Trusted Computing'
            zh='通过隐私计算帮助区块链保护秘密'></I18n>
        </div>
        <div className={styles.button}>
          <Button href={PHAConfig.href} type='link' color='primary'>
            <I18n en='Learn about PHA' zh='了解 PHA'></I18n>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen
