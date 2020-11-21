import React from 'react'
import I18n from '../../I18n'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'

type Props = {}

const ProductSection: React.FC<Props> = () => {
  return (
    <div className={styles.productSection}>
      <div className='container'>
        <div className={styles.content}>
          <div className='row'>
            <div className='col-lg-6'>
              <SectionHeader
                color='gray'
                title={{
                  en: 'Products on Phala',
                  zh: 'Phala 出品',
                }}
              />

              <div className={styles.productIcons}>
                <div>
                  <img
                    className={styles.productIcon}
                    src='/images/indexPage/productSection/icon-product-1.svg'
                    alt='web3 Analytics'
                  />
                </div>

                <div>
                  <img
                    className={styles.productIcon}
                    src='/images/indexPage/productSection/icon-product-2.svg'
                    alt='pLibra'
                  />
                </div>

                <div>
                  <img
                    className={styles.productIcon}
                    src='/images/indexPage/productSection/icon-product-3.svg'
                    alt='Darkpool&Darkwallet'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className={styles.link}>
                <a
                  target='_blank'
                  href={`https://github.com`}
                  className={styles.link}>
                  <I18n en='Check on Github' zh='访问 Github 查看'></I18n>
                </a>
              </div>

              <div className={styles.line}></div>

              <div className={styles.code}>
                <img
                  src='/images/indexPage/productSection/code.jpg'
                  alt='code'
                />
              </div>

              <p className={styles.description}>
                A bridge connecting Libra and Polkadot that is built for asset
                privacy protection and the largest user community communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
