import React from 'react'
import PageTitle from '../PageTitle'
import NormalLayout from '../NormalLayout'
import { isClient } from '../../utils/isClient'
import BackTop from '../BackTop'

import FirstScreen from './FirstScreen'
import ContributeSection from './ContributeSection'
import ParticipateSection from './ParticipateSection'

interface Props {}

const PageKhala = (x: Props) => {
  React.useEffect(() => {
    document.body.classList.add('khala');
    
    return () => {
        document.body.classList.remove('khala');
    }
  }, [])

  return (
    <NormalLayout>
      <PageTitle zh='Khala' en='Khala'></PageTitle>
      <FirstScreen />
      <ContributeSection />
      <ParticipateSection />

      <>{isClient() && <BackTop></BackTop>}</>
    </NormalLayout>
  )
}

export default PageKhala