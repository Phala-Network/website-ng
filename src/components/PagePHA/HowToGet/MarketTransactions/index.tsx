import I18n from '../../../I18n'
import LinkList from './LinkList'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  className?: string
}

const MarketTransactions: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={classnames([styles.marketTransactions, className])}>
      <div className={styles.title}>
        <I18n en='Trade on markets' zh='市场交易'></I18n>
      </div>
      <LinkList></LinkList>
    </div>
  )
}

export default MarketTransactions
