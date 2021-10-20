import React from 'react'
import { PageMinerConfig } from '../../config/PageMiner'
import BgLayer from '../BgLayer'
import DetailPageHeader from '../DetailPageHeader'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import Environment from './Environment'
import HeaderButtons from './HeaderButtons'
import * as styles from './index.module.scss'
import LoanAgreement from './LoanAgreement'
import Rewards from './Rewards'
import WhyNeed from './WhyNeed'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <BgLayer backgroundUrl="/images/PageMiner/bg2.png">
      <PageTitle zh="矿工" en="Miner"></PageTitle>

      <NormalLayout className={styles.pageMiner}>
        <div className="container">
          <DetailPageHeader {...PageMinerConfig}></DetailPageHeader>

          <HeaderButtons></HeaderButtons>

          <div id="content" className={styles.content}>
            {PageMinerConfig.content.map((item, index) => {
              const Component =
                {
                  WhyNeed,
                  Environment,
                  LoanAgreement,
                  Rewards
                }[item.id] ?? WhyNeed

              return (
                <Component
                  {...item}
                  index={index + 1}
                  key={JSON.stringify(item.name)}></Component>
              )
            })}

            <FloatMenu
              menuTitle={PageMinerConfig.menuTitle}
              menu={PageMinerConfig.content}
            />
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PageMiner
