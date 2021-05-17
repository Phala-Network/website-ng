import IconArrow from '../../../IconArrow'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

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
