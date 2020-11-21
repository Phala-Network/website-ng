import BackTop from '../BackTop'
import FirstScreen from './FirstScreen'
import Nav from '../Nav'
import Newsletter from '../Newsletter'
import React from 'react'
import Header from '../Header'
import { isClient } from '../../utils/isClient'
import CloudSection from './CloudSection'
import Footer from '../Footer'
import ExecutionSection from './ExecutionSection'
import ContractSection from './ContractSection'
import ProductSection from './ProductSection'
import PartnersSection from './PartnersSection'
import TimelineSection from './TimelineSection'

type Props = {}

const PageIndex: React.FC<Props> = (props) => {
  return (
    <div>
      <Header>
        <Nav></Nav>
        <Newsletter></Newsletter>
      </Header>
      <FirstScreen></FirstScreen>
      <CloudSection></CloudSection>
      <ExecutionSection></ExecutionSection>
      <ContractSection></ContractSection>
      <ProductSection></ProductSection>
      <PartnersSection></PartnersSection>
      <TimelineSection></TimelineSection>

      {/* <Footer></Footer> */}

      {isClient() && <BackTop visibilityHeight={window?.innerHeight}></BackTop>}
    </div>
  )
}

export default PageIndex
