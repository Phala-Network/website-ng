import React, { useEffect, useState } from 'react'
import I18n from '../../I18n'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import hljs from 'highlight.js/lib/core'
import rust from 'highlight.js/lib/languages/rust'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import Web3AnalyticsImage from './Web3AnalyticsImage'
import PLibraImage from './PLibraImage'
import DarkpoolAndDarkwalletImage from './DarkpoolAndDarkwalletImage'
import classnames from 'classnames'
import { config } from './config'
hljs.registerLanguage('rust', rust)

type Props = {}

const ProductSection: React.FC<Props> = () => {
  const [selectedProduct, setSelectedProduct] = useState('Web3Analytics')

  useEffect(() => {
    hljs.initHighlighting.called = false
    hljs.initHighlighting()

    const perfectScrollbar = new PerfectScrollbar('#codeDiv')

    return () => {
      perfectScrollbar.destroy()
    }
  }, [selectedProduct])

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
                <Web3AnalyticsImage
                  onClick={() => setSelectedProduct('Web3Analytics')}
                  className={classnames([
                    styles.productIcon,
                    {
                      [styles.active]: selectedProduct === 'Web3Analytics',
                    },
                  ])}></Web3AnalyticsImage>

                <PLibraImage
                  onClick={() => setSelectedProduct('pLibra')}
                  className={classnames([
                    styles.productIcon,
                    {
                      [styles.active]: selectedProduct === 'pLibra',
                    },
                  ])}></PLibraImage>

                <DarkpoolAndDarkwalletImage
                  onClick={() => setSelectedProduct('DarkpoolAndDarkwallet')}
                  className={classnames([
                    styles.productIcon,
                    {
                      [styles.active]:
                        selectedProduct === 'DarkpoolAndDarkwallet',
                    },
                  ])}></DarkpoolAndDarkwalletImage>
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

              <div id='codeDiv' className={styles.code}>
                <pre>
                  <code className='language-rust'>
                    {config[selectedProduct].code.content}
                  </code>
                </pre>
              </div>

              <p className={styles.description}>
                <I18n {...config[selectedProduct].text}></I18n>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
