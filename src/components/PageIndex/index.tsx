import React from 'react'
import { isClient } from '../../utils/isClient'
import BackTop from '../BackTop'
import NormalLayout from '../NormalLayout'
import CloudSection from './CloudSection'
import ContractSection from './ContractSection'
import ExecutionSection from './ExecutionSection'
import FirstScreen from './FirstScreen'
import PartnersSection from './PartnersSection'
import TimelineSection from './TimelineSection'

type Props = {}

const PageIndex: React.FC<Props> = () => {
  return (
    <NormalLayout newsletter={true}>
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
