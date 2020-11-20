import React, { useState } from 'react'
import isEmail from '../../../utils/isEmail'
import IconArrow from '../../IconArrow'
import IconSuccessCircle from '../../IconSuccessCircle'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'

type Props = {}

enum STATUS {
  default = 'default',
  warning = 'warning',
  success = 'success',
}

const EmailInput: React.FC<Props> = () => {
  const [textValue, setTextValue] = useState<string>('')
  const [status, setStatus] = useState<STATUS>(STATUS.default)

  function onChange(e) {
    setTextValue(e.target.value)
  }

  function checkEmail() {
    const isOk = isEmail(textValue)

    if (!isOk) {
      setStatus(STATUS.warning)
    }

    return isOk
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      sendEmail()
    }
  }

  async function sendEmail() {
    if (checkEmail()) {
      try {
        // TODO: send email to server

        setStatus(STATUS.success)
      } catch (e) {}
    }
  }

  return (
    <div>
      <div className={classnames([styles.emailInput, styles[status]])}>
        <input
          onKeyPress={onKeyPress}
          onChange={onChange}
          value={textValue}
          placeholder='ABC@Phala.network'
          type='text'
        />

        <div className={styles.icon}>
          {status === STATUS.success && <IconSuccessCircle></IconSuccessCircle>}
          {status !== STATUS.success && (
            <div onClick={sendEmail}>
              <IconArrow className={styles.iconArrow}></IconArrow>
            </div>
          )}
        </div>
      </div>

      {status === STATUS.warning && (
        <div className={classnames([styles.infoText, styles.warning])}>
          <I18n
            en='Please enter the right email address'
            zh='请输入正确的Email格式'></I18n>
        </div>
      )}

      {status === STATUS.success && (
        <div className={styles.infoText}>
          <I18n en='Thanks for subscribing!' zh='感谢订阅！'></I18n>
        </div>
      )}
    </div>
  )
}

export default EmailInput
