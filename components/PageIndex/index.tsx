import FirstScreen from './FirstScreen'
import React from 'react'
import CloudSection from './CloudSection'
import ExecutionSection from './ExecutionSection'
import ContractSection from './ContractSection'
import ProductSection from './ProductSection'
import PartnersSection from './PartnersSection'
import TimelineSection from './TimelineSection'
import NormalLayout from '../NormalLayout'

type Props = {}

const PageIndex: React.FC<Props> = () => {
  return (
    <NormalLayout>
      <FirstScreen></FirstScreen>
      <CloudSection></CloudSection>
      <ExecutionSection></ExecutionSection>
      <ContractSection></ContractSection>
      <ProductSection></ProductSection>
      <PartnersSection></PartnersSection>
      <TimelineSection></TimelineSection>
    </NormalLayout>
  )
}

export default PageIndex
