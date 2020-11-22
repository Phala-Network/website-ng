import React from 'react'
import { isClient } from '../../utils/isClient'
import BackTop from '../BackTop'
import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import Newsletter from '../Newsletter'

type Props = {}

const NormalLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Header>
        <Nav></Nav>
        <Newsletter></Newsletter>
      </Header>

      {props.children}

      <Footer></Footer>

      <>{isClient() && <BackTop></BackTop>}</>
    </>
  )
}

export default NormalLayout
