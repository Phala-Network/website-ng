import { PartnersSectionConfig } from '../../../../../config/PageIndexConfig/PartnersSectionConfig'
import React from 'react'
import * as styles from './index.module.scss'

const Partner = (props) => {
  const { index } = props
  const { partners } = PartnersSectionConfig
  const partner = partners[index]

  if (!partner) return null

  return (
    <div className={styles.partner} key={partner.name}>
      <a href={partner.link} target="_blank" rel="noreferrer">
        <img src={partner.logo} alt={partner.name} />
      </a>
    </div>
  )
}

export default Partner
