import React from 'react'
import { PartnersSectionConfig } from '../../../../../config/indexPage/PartnersSectionConfig'
import styles from './index.module.scss'

const Partner = (props) => {
  const { index } = props
  const { partners } = PartnersSectionConfig
  const partner = partners[index]

  return (
    <div className={styles.partner} key={partner.name}>
      <a href={partner.link} target='_blank'>
        <img src={partner.logo} alt={partner.name} />
      </a>
    </div>
  )
}

export default Partner
