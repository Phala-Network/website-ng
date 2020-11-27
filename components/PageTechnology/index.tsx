import React from 'react'
import { TechWhitepaperConfig } from '../../config'
import { DiscordConfig } from '../../config/DiscordConfig'
import { GithubConfig } from '../../config/GithubConfig'
import { PageTechnologyConfig } from '../../config/PageTechnology'
import { WikiConfig } from '../../config/WikiConfig'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import FloatMenu from '../FloatMenu'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import ThreePartyTrustedCommunication from './ThreePartyTrustedCommunication'
import ComputingEnvironment from './ComputingEnvironment'
import SeparationOfConsensusAndComputingLayer from './SeparationOfConsensusAndComputingLayer'
import Composability from './Composability'
import ApplicableScenarios from './ApplicableScenarios'
import HowToUse from './HowToUse'
import styles from './index.module.scss'
import BgLayer from '../BgLayer'

type Props = {}

const config = {}

const PageTechnology: React.FC<Props> = () => {
  return (
    <BgLayer backgroundUrl='/images/PageTechnology/bg.png'>
      <PageTitle zh='技术' en='Technology'></PageTitle>
      <NormalLayout className={styles.pageTechnology}>
        <div className='container'>
          <DetailPageHeader {...PageTechnologyConfig}></DetailPageHeader>

          <DetailPageHeaderButtons>
            <DetailPageButton
              className={styles.btn1}
              {...TechWhitepaperConfig}
            />
            <DetailPageButton className={styles.btn2} {...GithubConfig} />
            <DetailPageButton className={styles.btn3} {...WikiConfig} />
            <DetailPageButton className={styles.btn4} {...DiscordConfig} />
          </DetailPageHeaderButtons>

          <div id='content' className={styles.content}>
            {PageTechnologyConfig.content.map((item, index) => {
              const Component =
                {
                  ComputingEnvironment,
                  ThreePartyTrustedCommunication,
                  SeparationOfConsensusAndComputingLayer,
                  Composability,
                  ApplicableScenarios,
                  HowToUse,
                }[item.id] ?? ComputingEnvironment

              return (
                <Component
                  {...item}
                  index={index + 1}
                  key={JSON.stringify(item.name)}></Component>
              )
            })}

            <FloatMenu
              menuTitle={PageTechnologyConfig.menuTitle}
              menu={PageTechnologyConfig.content}
            />
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PageTechnology
