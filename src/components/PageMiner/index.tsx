import { PageMinerConfig } from '../../config/PageMiner'
import BgLayer from '../BgLayer'
import DetailPageHeader from '../DetailPageHeader'
import Environment from './Environment'
import FloatMenu from '../FloatMenu'
import HeaderButtons from './HeaderButtons'
import LoanAgreement from './LoanAgreement'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import React from 'react'
import Rewards from './Rewards'
import WhyNeed from './WhyNeed'
import * as styles from './index.module.scss'

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
