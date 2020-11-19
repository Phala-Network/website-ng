import React from 'react'
import BackTop from '../BackTop'
import Button from '../Button'
import Newsletter from '../Newsletter'

type Props = {}

const PageIndex: React.FC<Props> = (props) => {
  return (
    <div>
      <Newsletter></Newsletter>
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
