import { useLocale } from '../../hooks/useLocale'
import Button, { ButtonProps } from '../Button'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type props = {
  name?: { en: string; zh: string } | string
  qrCodeSrc?: { en?: string; zh?: string }
}

const DetailPageButton: React.FC<ButtonProps & props> = (props) => {
  const locale = useLocale()

  return (
    <Button
      size='middle'
      uppercase={false}
      color='gray'
      hasArrowIcon
      type='link'
      text={props.name}
      {...props}
      className={classnames([styles.button, props.className])}>
      {props.children}

      {
        props.qrCodeSrc?.[locale] && (
          <div className={styles.qrCodeContainer}>
            <img className={styles.qrCode} src={props.qrCodeSrc[locale]} alt="QR Code" />
          </div>
        )
      }
    </Button>
  )
}

export default DetailPageButton
