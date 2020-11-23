import React from 'react'
import { isClient } from '../../utils/isClient'
import BackTop from '../BackTop'
import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import Newsletter from '../Newsletter'

type Props = {
  className?: string
}

const NormalLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Header>
        <Nav></Nav>
        <Newsletter></Newsletter>
      </Header>

      <div {...props}>{props.children}</div>

      <Footer></Footer>

      <>{isClient() && <BackTop></BackTop>}</>
    </>
  )
}

export default NormalLayout
