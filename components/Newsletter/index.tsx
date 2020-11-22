import React, { useState } from 'react'
import styles from './index.module.scss'
import Marquee from 'react-fast-marquee'
import IconClose from './IconClose'
import I18n from '../I18n'
import { newsletterConfig } from '../../config/newsletterConfig'

type Props = {}

const Newsletter: React.FC<Props> = () => {
  const [visible, setVisible] = useState(true)

  function close() {
    setVisible(false)
  }

  const news = (
    <div className={styles.news}>
      <a href={newsletterConfig.link} target='_blank'>
        <I18n {...newsletterConfig.news}></I18n>
      </a>
    </div>
  )

  return visible ? (
    <div className={styles.newsletter}>
      <Marquee
        pauseOnHover={true}
        gradient={false as any}
        speed={20}
        direction='left'>
        {news}
        {news}
      </Marquee>
      <div className={styles.line}></div>
      <IconClose onClick={close} />
    </div>
  ) : null
}

export default Newsletter
