import Web3AnalyticsImage from './Web3AnalyticsImage'
import PLibraImage from './PLibraImage'

export const config = {
  Web3Analytics: {
    image: Web3AnalyticsImage,
    link:
      'https://github.com/Phala-Network/phala-blockchain/blob/71f6b94bd075aab2580efdbbada24cf6931954e2/standalone/pruntime/enclave/src/contracts/data_plaza.rs',
    text: {
      en:
        'Time to drop the centralized analytics tools! Instead of sending your user\'s privacy to the Internet cartels, W3A SDK enforces users\' 100% control over the privacy. With the SDK, any web service can become a part of Web3.0 in just a few minutes.',
      zh:
        '扔掉其他数据收集产品！W3A SDK 强制了隐私数据100%所有权都把握在用户用户手中，仅需几分钟，即可为任意互联网服务注入 Web3.0 的灵魂。',
    },
    code: {
      link:
        'https://github.com/Phala-Network/phala-blockchain/blob/71f6b94bd075aab2580efdbbada24cf6931954e2/standalone/pruntime/enclave/src/contracts/data_plaza.rs',
      content: (
`fn update_total_stat(&mut self, total_stat: HourlyPageViewStat, count_str: String) {
  self.total_stat = HourlyPageViewStat::default();

  if !self.encrypted.clone() {
    return;
  }

  let mut count = self.decrypt(total_stat.pv_count).parse::<u32>().unwrap();
  if count_str != "" {
    count += self.decrypt(count_str).parse::<u32>().unwrap();
  }

  let avg_duration = self.decrypt(total_stat.avg_duration).parse::<u32>().unwrap() / 2;

  self.total_stat = HourlyPageViewStat {
    sid: total_stat.sid,
    cid_count: total_stat.cid_count,
    pv_count: self.encrypt(count.to_string()),
    avg_duration: self.encrypt(avg_duration.to_string()),
    timestamp: total_stat.timestamp
  }
}`),
    },
  },
  pLibra: {
    image: PLibraImage,
    link:
      'https://github.com/Phala-Network/phala-blockchain/blob/71f6b94bd075aab2580efdbbada24cf6931954e2/standalone/pruntime/enclave/src/contracts/diem.rs',
    text: {
      en:
        'A bridge between Diem and Polkadot, helping the Diem users take back privacy rights in the real Web3.0 world.',
      zh:
        '连接 Diem 与 Polkadot 的桥梁，让 Diem 用户在真正的 Web3.0 世界中重获隐私',
    },
    code: {
      link:
        'https://github.com/Phala-Network/phala-blockchain/blob/71f6b94bd075aab2580efdbbada24cf6931954e2/standalone/pruntime/enclave/src/contracts/diem.rs',
      content: (
`pub fn verify_transactions(
    &mut self,
) -> Result<()> {
  let transactions= self.transactions.as_ref().unwrap().clone();
  for transaction in transactions {
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
}`),
    },
  },
}
