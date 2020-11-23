import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { TechnologyConfig } from '../../../config'
import { ExecutionSectionConfig } from '../../../config/PageIndex/ExecutionSectionConfig'
import Button from '../../Button'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import List from './List'

type Props = {}

const ExecutionSection: React.FC<Props> = () => {
  const { locale } = useRouter()

  return (
    <div className={styles.executionSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-xl-6'>
              <SectionHeader
                title={ExecutionSectionConfig.titleText}
                description={ExecutionSectionConfig.descriptionText}
              />
            </div>
            <div className='col-xl-6'>
              <Link href={TechnologyConfig.href?.[locale]}>
                <Button
                  className={styles.button}
                  text={ExecutionSectionConfig.buttonText}
                  color='black'
                  hasArrowIcon></Button>
              </Link>
            </div>
          </div>

          <List></List>
        </div>
      </div>
    </div>
  )
}

export default ExecutionSection
