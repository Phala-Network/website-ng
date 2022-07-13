import { Map } from './Map'
import { PhalaAppConfig } from '../../../config'
import { StaticsList } from './StaticsList'
import { WikiConfig } from '../../../config/WikiConfig'
import Button from '../../Button'
import I18n from '../../I18n'
import React, { FC } from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

const FirstScreen: FC = () => {
  const title = {
    en: ['COMPUTATION', 'FOR WEB3'],
    zh: ['Web3.0 计算协议']
  }

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={styles.bg}></div>
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
            en="Privacy-Enhanced Permissionless Computing Protocol"
            zh="隐私增强、无需许可的自治计算网络"
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
