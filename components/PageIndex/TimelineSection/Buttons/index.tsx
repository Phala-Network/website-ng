import React from 'react'
import IconArrow from '../../../IconArrow'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {
  onLeftButtonClick: Function
  onRightButtonClick: Function
}

const Buttons: React.FC<Props> = (props) => {
  const { onLeftButtonClick, onRightButtonClick } = props

  return (
    <div className={styles.buttons}>
      <div
        onClick={() => {
          onLeftButtonClick()
        }}
        className={classnames([styles.button, styles.left])}>
        <IconArrow direction='left'></IconArrow>
      </div>
      <div
        onClick={() => {
          onRightButtonClick()
        }}
        className={classnames([styles.button, styles.right])}>
        <IconArrow></IconArrow>
      </div>
    </div>
  )
}

export default Buttons
