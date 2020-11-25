import React from 'react'
import IconBBS from '../../icons/IconBBS'
import IconGithub from '../../icons/IconGithub'
import IconMedium from '../../icons/IconMedium'
import IconTelegram from '../../icons/IconTelegram'
import IconTwitter from '../../icons/IconTwitter'
import IconWechat from '../../icons/IconWechat'
import IconWeibo from '../../icons/IconWeibo'
import classnames from 'classnames'
import styles from './index.module.scss'
import { GithubConfig } from '../../../config/GithubConfig'
import { TelegramConfig } from '../../../config/TelegramConfig'
import { BBSConfig } from '../../../config/BBSConfig'
import { MediumConfig } from '../../../config/MediumConfig'
import { WeiboConfig } from '../../../config/WeiboConfig'
import { TwitterConfig } from '../../../config/TwitterConfig'
import Image from 'next/image'

type Props = {}

const MediaList: React.FC<Props> = () => {
  return (
    <div className={styles.mediaList}>
      {/* wechat */}
      <div className={classnames([styles.item, styles.wechat])}>
        <IconWechat></IconWechat>

        <div className={styles.qrcode}>
          <Image layout='fill' src='/images/qrcode.png' alt='qrcode' />
        </div>
      </div>

      {/* telegram */}
      <div className={styles.item}>
        <a href={TelegramConfig.url} target='_blank'>
          <IconTelegram></IconTelegram>
        </a>
      </div>

      {/* BBS(forum) */}
      <div className={styles.item}>
        <a href={BBSConfig.url} target='_blank'>
          <IconBBS></IconBBS>
        </a>
      </div>

      {/* medium */}
      <div className={styles.item}>
        <a href={MediumConfig.url} target='_blank'>
          <IconMedium></IconMedium>
        </a>
      </div>

      {/* Twitter */}
      <div className={styles.item}>
        <a href={TwitterConfig.url} target='_blank'>
          <IconTwitter></IconTwitter>
        </a>
      </div>

      {/* Github */}
      <div className={styles.item}>
        <a href={GithubConfig.url} target='_blank'>
          <IconGithub></IconGithub>
        </a>
      </div>

      {/* Weibo */}
      <div className={styles.item}>
        <a href={WeiboConfig.url} target='_blank'>
          <IconWeibo></IconWeibo>
        </a>
      </div>
    </div>
  )
}

export default MediaList
