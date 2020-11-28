import FirstScreen from './FirstScreen'
import React from 'react'
import CloudSection from './CloudSection'
import ExecutionSection from './ExecutionSection'
import ContractSection from './ContractSection'
import ProductSection from './ProductSection'
import PartnersSection from './PartnersSection'
import TimelineSection from './TimelineSection'
import NormalLayout from '../NormalLayout'
import { isClient } from '../../utils/isClient'
import BackTop from '../BackTop'

type Props = {}

const PageIndex: React.FC<Props> = () => {
  return (
    <NormalLayout newsletter={true}>
      <FirstScreen></FirstScreen>
      <CloudSection></CloudSection>
      <ExecutionSection></ExecutionSection>
      <ContractSection></ContractSection>
      <ProductSection></ProductSection>
      <PartnersSection></PartnersSection>
      <TimelineSection></TimelineSection>
      <>{isClient() && <BackTop></BackTop>}</>
    </NormalLayout>
  )
}

export default PageIndex
