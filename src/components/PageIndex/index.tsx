import { isClient } from '../../utils/isClient'
import BackTop from '../BackTop'
import CloudSection from './CloudSection'
import ContractSection from './ContractSection'
import CrowdloanSection from './CrowdloanSection'
import ExecutionSection from './ExecutionSection'
import FirstScreen from './FirstScreen'
import NormalLayout from '../NormalLayout'
import PartnersSection from './PartnersSection'
import React from 'react'
import TimelineSection from './TimelineSection'

type Props = {}

const PageIndex: React.FC<Props> = () => {
  return (
    <NormalLayout newsletter={false}>
      <CrowdloanSection />
      <FirstScreen></FirstScreen>
      <CloudSection></CloudSection>
      <ExecutionSection></ExecutionSection>
      <ContractSection></ContractSection>
      {/* <ProductSection></ProductSection> */}
      <PartnersSection></PartnersSection>
      <TimelineSection></TimelineSection>
      <>{isClient() && <BackTop></BackTop>}</>
    </NormalLayout>
  )
}

export default PageIndex
