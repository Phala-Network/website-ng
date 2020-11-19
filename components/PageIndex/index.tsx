import BackTop from '../BackTop'
import Button from '../Button'
import FirstScreen from './FirstScreen'
import LangSwitch from '../LangSwitch'
import Nav from '../Nav'
import Newsletter from '../Newsletter'
import React from 'react'
import Header from '../Header'

type Props = {}

const PageIndex: React.FC<Props> = (props) => {
  return (
    <div>
      <Header>
        <Newsletter></Newsletter>
        <Nav></Nav>
      </Header>
      <FirstScreen></FirstScreen>
      <Button hasArrowIcon style={{ width: 370 }}>
        {'CHECK OUR GITHUB'}
      </Button>
      <br />
      <Button hasArrowIcon>Link to xxxx</Button>
      <br />
      <Button color='primary' hasArrowIcon>
        Link to xxxx
      </Button>
      <div style={{ height: 2999 }}></div>
      <footer className={'footer'}></footer>
      <BackTop></BackTop>
    </div>
  )
}

export default PageIndex
