import React from 'react'
import Button, { ButtonProps } from '../Button'
import classnames from 'classnames'
import styles from './index.module.scss'

type props = {
  name?: { en: string; zh: string } | string
}

const DetailPageButton: React.FC<ButtonProps & props> = (props) => {
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
    </Button>
  )
}

export default DetailPageButton
