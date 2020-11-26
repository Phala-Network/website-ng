import React from 'react'
import IconBBS from '../icons/IconBBS'
import IconGithub from '../icons/IconGithub'
import IconMedium from '../icons/IconMedium'
import IconTelegram from '../icons/IconTelegram'
import IconTwitter from '../icons/IconTwitter'
import IconWechat from '../icons/IconWechat'
import IconWeibo from '../icons/IconWeibo'
import classnames from 'classnames'
import styles from './index.module.scss'
import { GithubConfig } from '../../../config/GithubConfig'
import { TelegramConfig } from '../../../config/TelegramConfig'
import { BBSConfig } from '../../../config/BBSConfig'
import { MediumConfig } from '../../../config/MediumConfig'
import { WeiboConfig } from '../../../config/WeiboConfig'
import { TwitterConfig } from '../../../config/TwitterConfig'
import Image from 'next/image'
import TagA from '../../TagA'

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
        <TagA href={TelegramConfig.url}>
          <IconTelegram></IconTelegram>
        </TagA>
      </div>

      {/* BBS(forum) */}
      <div className={styles.item}>
        <TagA href={BBSConfig.url}>
          <IconBBS></IconBBS>
        </TagA>
      </div>

      {/* medium */}
      <div className={styles.item}>
        <TagA href={MediumConfig.url}>
          <IconMedium></IconMedium>
        </TagA>
      </div>

      {/* Twitter */}
      <div className={styles.item}>
        <TagA href={TwitterConfig.url}>
          <IconTwitter></IconTwitter>
        </TagA>
      </div>

      {/* Github */}
      <div className={styles.item}>
        <TagA href={GithubConfig.url}>
          <IconGithub></IconGithub>
        </TagA>
      </div>

      {/* Weibo */}
      <div className={styles.item}>
        <TagA href={WeiboConfig.url}>
          <IconWeibo></IconWeibo>
        </TagA>
      </div>
    </div>
  )
}

export default MediaList
