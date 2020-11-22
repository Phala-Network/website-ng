import React from 'react'
import Button, { ButtonProps } from '../Button'

const DetailPageButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      size='middle'
      uppercase={false}
      color='gray'
      hasArrowIcon
      {...props}>
      {props.children}
    </Button>
  )
}

export default DetailPageButton
