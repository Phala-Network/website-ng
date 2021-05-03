import React from 'react'
import I18n from '../../I18n'
import styles from './Feature.module.scss'

export interface FeatureConfig {
    icon: string
    title: {
        zh: string
        en: string
    }
    description: {
        zh: string
        en: string
    }
}

const Feature = (x: FeatureConfig) => {
    return (
        <li className={styles.feature}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={x.icon} alt="" />
            </div>
            <div className={styles.title}>
                <I18n {...x.title} />
            </div>
            <div className={styles.description}>
                <I18n {...x.description} />
            </div>
        </li>
    )
}

export default Feature