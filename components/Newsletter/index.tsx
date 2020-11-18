import React, { useState } from 'react'
import styles from './index.module.scss'
import Marquee from 'react-fast-marquee'
import IconClose from './IconClose'

type Props = {}

const Newsletter: React.FC<Props> = () => {
  const [visible, setVisible] = useState(true)

  function close() {
    setVisible(false)
  }

  const news = (
    <div className={styles.news}>
      Phala Network Value Tops $10+ Million on New Fundraising 🎉
    </div>
  )

  return visible ? (
    <div className={styles.newsletter}>
      <Marquee
        pauseOnHover={true}
        gradient={false as any}
        speed={12}
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
