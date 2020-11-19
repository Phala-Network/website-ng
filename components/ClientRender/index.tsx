import React from 'react'

type Props = {}

const ClientRender: React.FC<Props> = (props) => {
  return typeof window === 'undefined' ? null : <>{props.children}</>
}

export default ClientRender
