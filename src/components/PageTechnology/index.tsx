import { DiscordConfig } from '../../config/DiscordConfig'
import { GithubConfig } from '../../config/GithubConfig'
import { PageTechnologyConfig } from '../../config/PageTechnology'
import { TechWhitepaperConfig } from '../../config'
import { WikiConfig } from '../../config/WikiConfig'
import ApplicableScenarios from './ApplicableScenarios'
import BgLayer from '../BgLayer'
import Composability from './Composability'
import ComputingEnvironment from './ComputingEnvironment'
import DetailPageButton from '../DetailPageButton'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageHeaderButtons from '../DetailPageHeaderButtons'
import FloatMenu from '../FloatMenu'
import HowToUse from './HowToUse'
import NormalLayout from '../NormalLayout'
import PageTitle from '../PageTitle'
import React from 'react'
import SeparationOfConsensusAndComputingLayer from './SeparationOfConsensusAndComputingLayer'
import ThreePartyTrustedCommunication from './ThreePartyTrustedCommunication'
import * as styles from './index.module.scss'

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
                  HowToUse
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
