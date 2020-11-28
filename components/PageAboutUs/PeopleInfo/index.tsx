import React from 'react'
import I18n, { I18nProps } from '../../I18n'
import styles from './index.module.scss'
import classnames from 'classnames'
import { useRouter } from 'next/router'

type Props = {
  name: I18nProps
  position: I18nProps
  description: I18nProps
  avatar: string
  last?: boolean
}

function getPath(name, base = 1) {
  const imageBase = '/images/PageAboutUs/people'

  if (base > 1) {
    return imageBase + `/${name}/${name}@${base}x.png ${base}x`
  } else {
    return imageBase + `/${name}/${name}.png`
  }
}

const PeopleInfo: React.FC<Props> = (props) => {
  const { name, position, description, avatar, last } = props
  const { locale } = useRouter()

  let style = {}

  if (locale === 'zh' && name.zh === '周顺帆博士') {
    style = {
      marginBottom: 58,
    }
  }

  let nameDom = (
    <div style={style} className={styles.name}>
      <I18n {...name}></I18n>
    </div>
  )

  return (
    <div
      className={classnames([
        styles.peopleInfo,
        {
          [styles.last]: last,
        },
      ])}>
      <div className={styles.inner}>
        <div className={styles.avatar}>
          <img
            src={getPath(avatar)}
            srcSet={getPath(avatar, 2) + ',' + getPath(avatar, 3)}></img>
        </div>
        {nameDom}
        <div className={styles.position}>
          <I18n {...position}></I18n>
        </div>
        <div className={styles.description}>
          <I18n {...description}></I18n>
        </div>
      </div>
    </div>
  )
}

export default PeopleInfo
