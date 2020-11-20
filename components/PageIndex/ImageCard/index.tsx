import React from 'react'
import I18n from '../../I18n'
import styles from './index.module.scss'

type Props = {
  image: string
  name: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
}

const ImageCard: React.FC<Props> = (props) => {
  const { image, name, description } = props

  return (
    <div className={styles.imageCard}>
      <div className={styles.image}>
        <img src={image}></img>
      </div>
      <div className={styles.line}></div>
      <div className={styles.name}>
        <I18n {...name}></I18n>
      </div>
      <div className={styles.description}>
        <I18n {...description}></I18n>
      </div>
    </div>
  )
}

export default ImageCard
