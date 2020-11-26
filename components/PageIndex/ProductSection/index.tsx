import React, { useEffect } from 'react'
import I18n from '../../I18n'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import hljs from 'highlight.js/lib/core'
import rust from 'highlight.js/lib/languages/rust'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

type Props = {}

const ProductSection: React.FC<Props> = () => {
  useEffect(() => {
    hljs.registerLanguage('rust', rust)
    hljs.initHighlighting()

    new PerfectScrollbar('#codeDiv')
  }, [])

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

              <div id='codeDiv' className={styles.code}>
                <pre>
                  <code className='language-rust'>
                    {`pub fn verify_transactions(
    &mut self,
) -> Result<()> {
    let transactions= self.transactions.as_ref().unwrap().clone();
    for transaction in transactions {
        //println!("{:#?}", transaction);
        let mut batch = JsonRpcBatch::new();
        let mut account = self.account.as_ref().unwrap().address.clone();
        batch.add_get_account_state_with_proof_request(account, Some(transaction.version), Some(self.trusted_state.as_ref().unwrap().latest_version()));
        let responses = self.rpc_client.execute(batch).unwrap();
        let resp = get_response_from_batch(0, &responses).unwrap().as_ref().unwrap();
        let account_state_proof =
            AccountStateWithProofView::from_response(resp.clone()).unwrap();

        let ledger_info_to_transaction_info_proof: TransactionAccumulatorProof =
            lcs::from_bytes(&account_state_proof.proof.ledger_info_to_transaction_info_proof.into_bytes().unwrap()).unwrap();
        let transaction_info: TransactionInfo =
            lcs::from_bytes(&account_state_proof.proof.transaction_info.into_bytes().unwrap()).unwrap();
        let transaction_info_to_account_proof: SparseMerkleProof =
            lcs::from_bytes(&account_state_proof.proof.transaction_info_to_account_proof.into_bytes().unwrap()).unwrap();
        let account_state_blob: AccountStateBlob =
            lcs::from_bytes(&account_state_proof.blob.unwrap().into_bytes().unwrap()).unwrap();
        //println!("{:#?}", account_state_blob);


        let transaction_info_with_proof = TransactionInfoWithProof::new(
            ledger_info_to_transaction_info_proof,
            transaction_info
        );

        let account_transaction_state_proof = AccountStateProof::new(
            transaction_info_with_proof,
            transaction_info_to_account_proof,
        );
        account_transaction_state_proof.verify(
            self.latest_li.as_ref().unwrap().ledger_info(),
            transaction.version,
            self.account.as_ref().unwrap().address.hash(),
            Some(&account_state_blob),
        );
        println!("{:#?}", transaction.version);
    }
    Ok(())
}
                    `}
                  </code>
                </pre>
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
