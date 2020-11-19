import React from 'react'
import Button from '../../Button'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'

type Props = {}

const FirstScreen: React.FC<Props> = () => {
  const description = 'Blockchain Confidentiality by Trusted Computing'
  const title = ['Phala Network', 'the pixalizer of', 'blockchain.']

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          {title.map((str) => {
            return <div key={str}>{str}</div>
          })}
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.button}>
          <Button color='primary'>
            <I18n en='Learn about PHA' zh='开始学习 PHA'></I18n>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen
