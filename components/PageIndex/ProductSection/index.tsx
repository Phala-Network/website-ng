import React, { useState } from 'react'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import classnames from 'classnames'
import { config } from './config'
import CodePanel from './CodePanel'

type Props = {}

const ProductSection: React.FC<Props> = () => {
  const [selectedProduct, setSelectedProduct] = useState('Web3Analytics')

  return (
    <div className={styles.productSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-lg-6'>
              <SectionHeader
                titleClassName={styles.title}
                color='gray'
                title={{
                  en: 'Products on Phala',
                  zh: '基于秘密智能合约的产品',
                }}
              />

              <div className={styles.productIcons}>
                {Object.keys(config).map((key) => {
                  const value = config[key]
                  const Component = value.image

                  return (
                    <div key={key}>
                      <Component
                        onClick={() => setSelectedProduct(key)}
                        className={classnames([
                          styles.productIcon,
                          {
                            [styles.active]: selectedProduct === key,
                          },
                        ])}></Component>

                      {selectedProduct === key && (
                        <CodePanel
                          id={`${key}`}
                          className={styles.mobileCodePanel}
                          selectedProduct={key}></CodePanel>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='col-lg-6'>
              <CodePanel
                id={'mainCodePanel'}
                className={styles.pcCodePanel}
                selectedProduct={selectedProduct}></CodePanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
