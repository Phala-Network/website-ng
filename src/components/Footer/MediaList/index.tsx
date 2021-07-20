import { BBSConfig } from '../../../config/BBSConfig'
import { DiscordConfig } from '../../../config/DiscordConfig'
import { GithubConfig } from '../../../config/GithubConfig'
import { MediumConfig } from '../../../config/MediumConfig'
import { TelegramConfig } from '../../../config/TelegramConfig'
import { TwitterConfig } from '../../../config/TwitterConfig'
import IconBBS from '../icons/IconBBS'
import IconDiscord from '../icons/IconDiscord'
import IconGithub from '../icons/IconGithub'
import IconMedium from '../icons/IconMedium'
import IconTelegram from '../icons/IconTelegram'
import IconTwitter from '../icons/IconTwitter'
import IconWechat from '../icons/IconWechat'
import React from 'react'
import TagA from '../../TagA'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {}

const MediaList: React.FC<Props> = () => {
  return (
    <div className={styles.mediaList}>
      {/* wechat */}
      <div className={classnames([styles.item, styles.wechat])}>
        <IconWechat></IconWechat>

        <div className={styles.qrcode}>
          <img src='/images/qrcode.jpg' alt='qrcode' />
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

      {/* Discord */}
      <div className={styles.item}>
        <TagA href={DiscordConfig.href}>
          <IconDiscord></IconDiscord>
        </TagA>
      </div>
    </div>
  )
}

export default MediaList
