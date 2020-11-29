import React from 'react'
import Card, { CardProps } from '../../Card'
import styles from './index.module.scss'
import IconGithub from './icons/IconGithub'
import IconTwitter from './icons/IconTwitter'
import IconDiscord from './icons/IconDiscord'
import IconForum from './icons/IconForum'
import IconTelegram from './icons/IconTelegram'
import IconWechat from './icons/IconWechat'
import IconWiki from './icons/IconWiki'
import I18n from '../../I18n'
import { GithubConfig } from '../../../config/GithubConfig'
import { TwitterConfig } from '../../../config/TwitterConfig'
import { TelegramConfig } from '../../../config/TelegramConfig'
import { DiscordConfig, DiscordDevChannel } from '../../../config/DiscordConfig'
import { BBSConfig } from '../../../config/BBSConfig'
import { WikiConfig } from '../../../config/WikiConfig'
import { WechatConfig } from '../../../config/WechatConfig'
import { useRouter } from 'next/router'
import TagA from '../../TagA'

const Join: React.FC<CardProps> = (props) => {
  const { locale } = useRouter()

  return (
    <Card type='small' cardContentClassName={styles.cardContent} {...props}>
      {/* GitHub */}
      <div className={styles.item}>
        <TagA href={GithubConfig.href} className={styles.inner}>
          <div className={styles.icon}>
            <IconGithub></IconGithub>
          </div>
          <div className={styles.name}>GitHub</div>
        </TagA>
      </div>

      {/* Twitter */}
      <div className={styles.item}>
        <TagA href={TwitterConfig.url} className={styles.inner}>
          <div className={styles.icon}>
            <IconTwitter></IconTwitter>
          </div>
          <div className={styles.name}></div>
          <I18n en='Twitter' zh='推特'></I18n>
        </TagA>
      </div>

      {/* Telegram */}
      <div className={styles.item}>
        <TagA href={TelegramConfig.url} className={styles.inner}>
          <div className={styles.icon}>
            <IconTelegram></IconTelegram>
          </div>
          <div className={styles.name}>Telegram</div>
        </TagA>
      </div>

      {/* Discord */}
      <div className={styles.item}>
        <TagA href={DiscordDevChannel.href} className={styles.inner}>
          <div className={styles.icon}>
            <IconDiscord></IconDiscord>
          </div>
          <div className={styles.name}></div>
          <I18n {...DiscordDevChannel.name}></I18n>
        </TagA>
      </div>

      {/* Forum */}
      <div className={styles.item}>
        <TagA href={BBSConfig.url} className={styles.inner}>
          <div className={styles.icon}>
            <IconForum></IconForum>
          </div>
          <div className={styles.name}></div>
          <I18n en='Forum' zh='论坛'></I18n>
        </TagA>
      </div>

      {/* Wiki */}
      <div className={styles.item}>
        <TagA href={WikiConfig.href[locale]} className={styles.inner}>
          <div className={styles.icon}>
            <IconWiki></IconWiki>
          </div>
          <div className={styles.name}>Wiki</div>
        </TagA>
      </div>

      {/* Discord General */}
      <div className={styles.item}>
        <TagA href={DiscordConfig.href.en} className={styles.inner}>
          <div className={styles.icon}>
            <IconDiscord></IconDiscord>
          </div>
          <div className={styles.name}></div>
          <I18n en='Discord Server' zh='Discord 频道'></I18n>
        </TagA>
      </div>

      {/* Wechat */}
      <div className={styles.item}>
        <TagA href={WechatConfig.url} className={styles.inner}>
          <div className={styles.icon}>
            <IconWechat></IconWechat>
          </div>
          <div className={styles.name}></div>
          <I18n en='WeChat' zh='微信'></I18n>
        </TagA>
      </div>
    </Card>
  )
}

export default Join
