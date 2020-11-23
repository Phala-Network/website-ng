import React from 'react'
import { EconomyWhitepaperConfig } from '../../config/EconomyWhitepaperConfig'
import { PageMinerConfig } from '../../config/PageMiner'
import { WikiConfig } from '../../config/WikiConfig'
import DetailPageButton from '../DetailPageButton'
import NormalLayout from '../NormalLayout'
import SectionHeader from '../SectionHeader'
import Card from './Card'
import FloatMenu from './FloatMenu'
import styles from './index.module.scss'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <NormalLayout>
      <div className={styles.pageMiner}>
        <div className='container'>
          <div className={styles.header}>
            <SectionHeader
              {...PageMinerConfig}
              color='gray'
              titleClassName={styles.title}
              descriptionClassName={styles.description}></SectionHeader>
          </div>
          <div className={styles.buttons}>
            <DetailPageButton
              type='link'
              className={styles.btn1}
              href={EconomyWhitepaperConfig.href}
              text={EconomyWhitepaperConfig.name}
            />

            <DetailPageButton
              className={styles.btn3}
              text={{
                en: 'Wechat Group',
                zh: '微信群',
              }}
            />

            <DetailPageButton
              type='link'
              className={styles.btn2}
              href={WikiConfig.href}
              text={WikiConfig.name}
            />
          </div>

          <div id='content' className={styles.content}>
            {PageMinerConfig.content.map((item, index) => {
              return (
                <Card {...item} index={index + 1} bgIndex={index + 1}></Card>
              )
            })}

            <FloatMenu
              menuTitle={PageMinerConfig.menuTitle}
              menu={PageMinerConfig.content}></FloatMenu>
          </div>
        </div>
      </div>
    </NormalLayout>
  )
}

export default PageMiner
