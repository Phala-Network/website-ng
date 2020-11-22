import React from 'react'
import CardContent, { CardContentProps } from '../../CardContent'
import CardHeader, { CardHeaderProps } from '../../CardHeader'
import styles from './index.module.scss'

type Props = {} & CardHeaderProps & CardContentProps

const Card: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <CardHeader name={props.name} index={props.index}></CardHeader>
      <CardContent bgIndex={props.bgIndex}>
        Mn the confidentiality contract, all data is encrypted and stored. In
        order to ensure that the miners can use the data at any time, we need
        the role of Gatekeeper to be online at all times and hold the key
        securely. Gatekeeper packs new blocks in the Phala network and manages
        the key distribution in the system, so it needs to be online at all
        times. A Gatekeeper must run the Gatekeeper client on a trusted device
        with high availability and high bandwidth. On each block, the node must
        be prepared to receive a new block on the submitted parachain. This
        process involves accepting, verifying, and republishing candidate
        blocks.
      </CardContent>
    </div>
  )
}

export default Card
