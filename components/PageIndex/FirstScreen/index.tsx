import React from 'react'
import Button from '../../Button'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'

type Props = {}

const FirstScreen: React.FC<Props> = () => {
  const title = ['Phala Network', 'the pixalizer of', 'blockchain.']

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          {title.map((str) => {
            return <div key={str}>{str}</div>
          })}
        </div>
        <div className={styles.description}>
          <I18n
            en='Blockchain Confidentiality by Trusted Computing'
            zh='通过隐私计算帮助区块链保护秘密'></I18n>
        </div>
        <div className={styles.button}>
          <Button color='primary'>
            <I18n en='Learn about PHA' zh='了解 PHA'></I18n>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen
