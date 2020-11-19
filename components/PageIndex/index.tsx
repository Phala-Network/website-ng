import BackTop from '../BackTop'
import FirstScreen from './FirstScreen'
import Nav from '../Nav'
import Newsletter from '../Newsletter'
import React from 'react'
import Header from '../Header'
import { isClient } from '../../utils/isClient'
import CloudSection from './CloudSection'

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

      <footer className={'footer'}></footer>

      {isClient() && <BackTop visibilityHeight={window?.innerHeight}></BackTop>}
    </div>
  )
}

export default PageIndex
