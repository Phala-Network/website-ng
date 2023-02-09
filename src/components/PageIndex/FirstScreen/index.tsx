import { Map } from './Map'
import { PhalaAppConfig } from '../../../config'
import { StaticsList } from './StaticsList'
import { WikiConfig } from '../../../config/WikiConfig'
import Button from '../../Button'
import I18n from '../../I18n'
import React, { FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

const WIKI_PREFIX = process.env.GATSBY_WIKI_PREFIX || 'https://wiki.phala.network'

const FirstScreen: FC = () => {
  const title = {
    en: ['COMPUTATION', 'FOR WEB3'],
    zh: ['Web3.0 计算协议']
  }

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={styles.bg}></div>

      <div className={styles.bannerWrapper}>
        <div className={styles.banner}>
          <img src="/images/logo-builders-program.png" alt="Builders Program" />
          <section className={styles.bannerContainer}>
            <div className={styles.bannerBody}>
              <header className={styles.bannerHeader}>
                <h3 className={styles.bannerSubtitle}>We are thrilled to announce the launch of</h3>
                <h2 className={styles.bannerTitle}>the Phala Builders Program!</h2>
              </header>
              <div className={styles.bannerText}>This program provides funding, technical guidance, and marketing support to innovative projects seeking to build on Phala’s decentralized, trustless compute cloud using <span className={styles.tag}>#PhatContract</span>.</div>
              <div><a href={`${WIKI_PREFIX}/en-us/build/general/builders-program/`} className={styles.bannerLink}>To learn more about the program and apply, click here</a></div>
            </div>
          </section>
        </div>
      </div>

      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          <I18n
            render={(str: string | string[]) => (
              <div key={str.toString()}>{str}</div>
            )}
            {...title}
          />
        </div>
        <div className={styles.description}>
          <I18n
            en="Phala Network is a decentralized cloud that offers secure and scalable computing"
            zh="去中心化、安全和可迅速扩展的计算网络"
          />
        </div>
        <div className={styles.buttons}>
          <Button
            text={PhalaAppConfig.name}
            href={PhalaAppConfig.href}
            className={styles.button}
            type="link"
            color="primary"></Button>
          <Button
            text={WikiConfig.name}
            href={WikiConfig.href}
            className={styles.button}
            hasArrowIcon
            type="link"
            color="gray"></Button>
        </div>

        <StaticsList></StaticsList>
      </div>

      <Map></Map>
    </section>
  )
}

export default FirstScreen
