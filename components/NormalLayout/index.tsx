import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import Newsletter from '../Newsletter'

type Props = {
  className?: string
  newsletter?: boolean
}

const NormalLayout: React.FC<Props> = (props) => {
  const { newsletter = false } = props

  return (
    <>
      <Header>
        <Nav></Nav>
        {newsletter && <Newsletter></Newsletter>}
      </Header>

      <div {...props}>{props.children}</div>

      <Footer></Footer>
    </>
  )
}

export default NormalLayout
