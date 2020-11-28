import React, { useEffect } from 'react'
import { EconomyWhitepaperConfig } from '../../config/EconomyWhitepaperConfig'
import { PageNodeConfig } from '../../config/PageNode'
import { WikiConfig } from '../../config/WikiConfig'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import styles from './index.module.scss'
import Gatekeeper from './Gatekeeper'
import Nominator from './Nominator'
import ConsensusMechanism from './ConsensusMechanism'
import BgLayer from '../BgLayer'

type Props = {}

const PageNode: React.FC<Props> = () => {
  useEffect(() => {
    Array.from(document.querySelectorAll('.story.sticky')).forEach(function (
      el: any
    ) {
      const { height: e } = el.getBoundingClientRect()
      const bottom = -e + 50
      el.style.bottom = bottom + 'px'
    })
  }, [])

  return (
    <BgLayer backgroundUrl='/images/PageNode/bg.png'>
      <PageTitle zh='节点' en='Node'></PageTitle>

      <NormalLayout className={styles.pageNode}>
        <div className='container'>
          <DetailPageHeader {...PageNodeConfig}></DetailPageHeader>
          <DetailPageHeaderButtons>
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
              href={{
                en: 'https://wiki.phala.network/en-us/docs/poc2/',
                zh: 'https://wiki.phala.network/zh-cn/docs/poc2/ ',
              }}
              text={WikiConfig.name}
            />
          </DetailPageHeaderButtons>

          <div className='sticky-container'>
            <div className='sticky nav'>
              <div className='sticky-positioning'>
                <div className='navigation'>
                  <FloatMenu
                    menuTitle={PageNodeConfig.menuTitle}
                    menu={PageNodeConfig.content}></FloatMenu>
                </div>
              </div>
            </div>

            <div id='content' className={styles.content}>
              {PageNodeConfig.content.map((item, index) => {
                const Component = {
                  Gatekeeper,
                  Nominator,
                  ConsensusMechanism,
                }[item.id]

                return (
                  <Component
                    {...item}
                    index={index + 1}
                    key={JSON.stringify(item.name)}></Component>
                )
              })}
            </div>
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PageNode
