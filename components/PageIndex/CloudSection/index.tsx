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
          <Button color='gray' hasArrowIcon>
            <I18n en='Tech Whitepaper' zh='技术白皮书'></I18n>
          </Button>

          <Button color='gray' hasArrowIcon>
            <I18n en='Economic Whitepaper' zh='经济白皮书'></I18n>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CloudSection
