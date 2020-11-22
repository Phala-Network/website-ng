import React from 'react'
import { EconomyWhitepaperConfig } from '../../config/EconomyWhitepaperConfig'
import { PageMinerConfig } from '../../config/PageMiner'
import { WikiConfig } from '../../config/WikiConfig'
import Button from '../Button'
import NormalLayout from '../NormalLayout'
import SectionHeader from '../SectionHeader'
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
            <Button
              size='middle'
              uppercase={false}
              className={styles.btn1}
              type='link'
              color='gray'
              href={EconomyWhitepaperConfig.href}
              text={EconomyWhitepaperConfig.name}
              hasArrowIcon></Button>

            <Button
              size='middle'
              uppercase={false}
              className={styles.btn2}
              type='link'
              color='gray'
              href={WikiConfig.href}
              text={WikiConfig.name}
              hasArrowIcon></Button>

            <Button
              size='middle'
              uppercase={false}
              className={styles.btn3}
              color='gray'
              text={{
                en: 'Wechat Group',
                zh: '微信群',
              }}
              hasArrowIcon></Button>
          </div>
        </div>
      </div>
    </NormalLayout>
  )
}

export default PageMiner
