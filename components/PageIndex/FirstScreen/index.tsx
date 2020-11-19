import React from 'react'
import Button from '../../Button'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {}

const FirstScreen: React.FC<Props> = () => {
  const description = 'Blockchain Confidentiality by Trusted Computing'
  const title = ['Phala Network', 'the pixalizer of', 'blockchain.']
  const buttonText = 'Learn aboout PHA'

  return (
    <div className={classnames([styles.firstScreen])}>
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          {title.map((str) => {
            return <div key={str}>{str}</div>
          })}
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.button}>
          <Button color='primary'>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}

export default FirstScreen
