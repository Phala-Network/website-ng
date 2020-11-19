import React from 'react'
import Button from '../../Button'
import I18n from '../../I18n'
import styles from './index.module.scss'

type Props = {}

const CloudSection: React.FC<Props> = (props) => {
  return (
    <div className={styles.cloudSection}>
      <div className='container'>
        <div className={styles.content}>
          <div>
            <div className={styles.title}>
              Decentralized Privacy Computing Cloud
            </div>

            <div className={styles.description}>
              Raw-data-protected Data processing Confidential Smart Contract for
              DApps and DeFi
            </div>
          </div>

          <div className={styles.buttons}>
            <Button color='gray' hasArrowIcon>
              <I18n en='Economic Whitepaper' zh='经济白皮书'></I18n>
            </Button>

            <Button color='gray' hasArrowIcon>
              <I18n en='Tech Whitepaper' zh='技术白皮书'></I18n>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudSection
