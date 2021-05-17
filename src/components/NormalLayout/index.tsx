import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import Newsletter from '../Newsletter'
import React from 'react'

type Props = {
  className?: string
  newsletter?: boolean
}

const NormalLayout: React.FC<Props> = (props) => {
  const { newsletter = false, className } = props

  return (
    <>
      <Header>
        <Nav></Nav>
        {newsletter && <Newsletter></Newsletter>}
      </Header>

      <div className={className}>{props.children}</div>

      <Footer></Footer>
    </>
  )
}

export default NormalLayout
