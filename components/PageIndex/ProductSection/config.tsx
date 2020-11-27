import Web3AnalyticsImage from './Web3AnalyticsImage'
import PLibraImage from './PLibraImage'
import DarkpoolAndDarkwalletImage from './DarkpoolAndDarkwalletImage'

export const config = {
  Web3Analytics: {
    image: Web3AnalyticsImage,
    link:
      'https://github.com/Phala-Network/phala-blockchain/blob/master/pruntime/enclave/src/contracts/web3analytics.rs',
    text: {
      en:
        'Time to replace the traditional analytics tools. Support privacy-protected SDK and Take control over your data, from this moment, on W3A',
      zh:
        '扔掉其他数据管理产品！通过W3A SDK，让互联网产品变成Web3.0产品，并强制保障用户对个人数据掌握100%所有权',
    },
    code: {
      link:
        'https://github.com/Phala-Network/phala-blockchain/blob/master/pruntime/enclave/src/contracts/web3analytics.rs#L674-L695',
      content: `fn update_total_stat(&mut self, total_stat: HourlyPageViewStat, count_str: String) {
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
}`,
    },
  },
  pLibra: {
    image: PLibraImage,
    link:
      'https://github.com/Phala-Network/plibra-experimental/blob/master/src/main.rs',
    text: {
      en:
        'A bridge built for asset privacy protection and user connection between Libra and Polkadot.',
      zh:
        'Libra与Polkadot的桥梁，不仅能让最大用户规模的区块链与波卡连接，还能保障Libra用户的隐私',
    },
    code: {
      link:
        'https://github.com/Phala-Network/plibra-experimental/blob/master/src/main.rs#L298-L341',
      content: `pub fn verify_transactions(
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
}`,
    },
  },
  DarkpoolAndDarkwallet: {
    image: DarkpoolAndDarkwalletImage,
    link:
      'https://github.com/Phala-Network/phala-blockchain/blob/master/pruntime/enclave/src/contracts/balances.rs',
    text: {
      en:
        'A shield of your DeFi operation on Kusama Network protecting you from targeted attacks in trading markets.',
      zh:
        'Defi操作不想被针对性攻击？使用Kusama上的去中心化暗池，结合了零知识证明和TEE技术，让你的交易敏感数据可以被保护',
    },
    code: {
      link:
        'https://github.com/Phala-Network/phala-blockchain/blob/master/pruntime/enclave/src/contracts/balances.rs#L137-L174',
      content: `let o = AccountIdWrapper(origin.clone());
println!("Transfer to chain: [{}] -> [{}]: {}", o.to_string(), dest.to_string(), value);
if let Some(src_amount) = self.accounts.get_mut(&o) {
    if *src_amount >= value {
        if self.id.is_none() {
            return TransactionStatus::BadSecret;
        }

        let src0 = *src_amount;
        *src_amount -= value;
        self.total_issuance -= value;
        println!("   src: {:>20} -> {:>20}", src0, src0 - value);
        let sequence = self.sequence + 1;

        let data = Transfer {
            dest,
            amount: value,
            sequence,
        };

        let id = self.id.as_ref().unwrap();
        let sig = id.sign(&Encode::encode(&data));
        let transfer_data = TransferData {
            data,
            signature: sig.0.to_vec(),
        };
        self.queue.push(transfer_data);
        self.sequence = sequence;

        TransactionStatus::Ok
    } else {
        TransactionStatus::InsufficientBalance
    }
} else {
    TransactionStatus::NoBalance
}`,
    },
  },
}
