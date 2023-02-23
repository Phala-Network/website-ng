import { useLocale } from '../../../hooks/useLocale'
import I18n from '../../I18n'
import IconArrow from '../../IconArrow'
import IconSuccessCircle from '../../IconSuccessCircle'
import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import isEmail from '../../../utils/isEmail'
import useHobspot from '../useHobspot'
import * as styles from './index.module.scss'

type Props = {
  status: any
  message: any
  onValidated: Function
}

enum STATUS {
  default = 'default',
  warning = 'warning',
  success = 'success'
}

const EmailInput: React.FC<Props> = (props) => {
  const [textValue, setTextValue] = useState<string>('')
  const [status, setStatus] = useState<STATUS>(STATUS.default)
  const locale = useLocale()
  const placeholderText = {
    en: 'Enter your email address',
    zh: '输入您的邮箱'
  }

  const { data, isLoading, isError, handleSubmit } = useHobspot(
    {
      portalId: '20647882',
      formId: '0b071cad-c7bd-44dd-9f2d-e1a822e2e1cf'
    },
    {
      email: textValue
    }
  )

  const isSuccess =
    data?.data?.inlineMessage === 'Thanks for submitting the form.'

  useEffect(() => {
    if (props.status === 'success') {
      setStatus(STATUS.success)
    }
  }, [props.status])

  function onChange (e) {
    setTextValue(e.target.value)
  }

  function checkEmail () {
    const isOk = isEmail(textValue)
    setStatus(STATUS.default)

    if (!isOk) {
      setStatus(STATUS.warning)
    }

    return isOk
  }

  function onKeyPress (e) {
    if (e.key === 'Enter') {
      sendEmail()
    }
  }

  async function sendEmail () {
    if (checkEmail()) {
      try {
        handleSubmit()
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <div>
      <div className={classnames([styles.emailInput, styles[status]])}>
        <input
          onKeyPress={onKeyPress}
          onChange={onChange}
          value={textValue}
          placeholder={placeholderText[locale]}
          type="text"
        />

        <div className={styles.icon}>
          {isSuccess && <IconSuccessCircle></IconSuccessCircle>}
          {!isSuccess && (
            <div onClick={sendEmail}>
              <IconArrow className={styles.iconArrow}></IconArrow>
            </div>
          )}
        </div>
      </div>

      {isLoading && (
        <div className={classnames([styles.infoText, styles.warning])}>
          <I18n en="Sending..." zh="发送中..."></I18n>
        </div>
      )}

      {props.status === 'error' && (
        <div className={classnames([styles.infoText, styles.warning])}>
          <I18n en="Subscribe Fail" zh="订阅失败"></I18n>
        </div>
      )}

      {status === STATUS.warning && (
        <div className={classnames([styles.infoText, styles.warning])}>
          <I18n
            en="Please enter the right email address"
            zh="请输入正确的邮箱地址"></I18n>
        </div>
      )}

      {isSuccess && (
        <div className={styles.infoText}>
          <I18n en="Thanks for subscribing!" zh="感谢订阅！"></I18n>
        </div>
      )}
    </div>
  )
}

export default EmailInput
