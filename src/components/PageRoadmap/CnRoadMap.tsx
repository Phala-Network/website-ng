import React from 'react'
import * as styles from './index.module.scss'

export default function CnRoadMap() {
  return (
    <article className={styles.pageRoadmap}>
      <h1 className={styles.pageTitle}>Phat Contract RoadMap 2023</h1>

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>TLDR</h2>
          <p className={styles.sectionSubTitle}>
            2022年，Phala
            Network在四个关键领域取得了重大进展，包括去中心化、创新、实用性和社区：
          </p>
        </header>
        <ul className={styles.summaryStats}>
          <li>
            超过18,000个服务器在50多个城市提供142,000多个虚拟CPU。
          </li>
          <li>
            在所有代码仓库中进行了1,434次提交和408个PR。
          </li>
          <li>
            我们的旗舰革命性产品Phat Contract已经完成功能，并处于封闭测试阶段。
          </li>
          <li>
            在全球14个国家和18个城市举办了141个活动，触及超过230,000人。
          </li>
        </ul>
        <p className={styles.sectionSubTitle}>
          2023年，Phala将在所有这些基础上继续发展，并开始革新最小化信任的计算。
        </p>
      </section>

      <hr className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>Phat Contract</h2>
          <p className={styles.sectionSubTitle}>
            实现链下计算服务，提供允许高度自定义开发的Serverless SDK
          </p>
        </header>
        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            将Phat Contract打造为Web 3 堆栈的核心部分。
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phat Contract 1.0在主网上线
              <code className={styles.Q1}>预计Q1</code>
            </h4>
            <p className={styles.liContent}>
              革命性的“抵押计算”模型，让你告别云服务账单，你的用户摆脱Gas费
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              “Phat Bricks” 组件<code className={styles.Q1}>预计Q1</code>
            </h4>
            <p className={styles.liContent}>
              低代码体验，极大降低Phat
              Contracts的开发门槛，并针对特定用例如Oracles实现组件化
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              更多“Phat Bricks” 组件
              <code className={styles.Q2}>预计Q2</code>
            </h4>
            <p className={styles.liContent}>更广泛的多链和用例支持</p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phat Contract 2.0 <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
            <h4 className={styles.liContent}>
              支持异步调用的Phat Bricks，打开一个全新的世界。
            </h4>
          </div>
        </div>
        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>构建Web3中最佳的开发者体验。</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              一键式Phat Contract开发环境
              <code className={styles.Q2}>预计Q2</code>
            </h4>
          </div>

          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              针对Phala 开发者的“免费试用计划”
              <code className={styles.Q2}>预计Q2</code>
            </h4>
            <p className={styles.liContent}>
              每个新用户都可以有一定的免费试用额度
            </p>
          </div>

          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phat Contract学院<code className={styles.Q3}>预计Q3</code>
            </h4>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>成为行业先驱。</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              线上和线下运营Phat Bricks和社区创新的最佳方式
              <code className={styles.yearRound}>全年</code>
            </h4>
          </div>
        </div>
      </section>

      <div className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>计算</h2>
          <p className={styles.sectionSubTitle}>
            去中心化计算网络能支持链下计算的需求增长，提高服务质量。
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>下一代Phala 计算网络</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              第二代网络-支持Phat Contract 1.0，上线首个“代表公共利益”的集群
              <code className={styles.Q1}>预计Q1</code>
            </h4>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              第三代网络-实施完整的layer1 经济模型，允许任何人运行能支持Phat
              Contract的集群
              <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
          </div>

          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              第四代网络-“SideVM”发布，实现Phat Contract程序的持久化
              <code className={styles.expected2024}>预计2024年</code>
            </h4>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>扩展受支持的安全硬件技术</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              支持SGX 2.0 <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
          </div>

          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              添加第二个安全硬件标准
              <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
          </div>
        </div>
      </section>

      <div className={styles.hr}></div>

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>PhalaWorld</h2>
          <p className={styles.sectionSubTitle}>
            打造你在Phala Network上行为的游戏化体验
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>Phala的NFT交易市场体验</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>1.0<code /></h4>
            <p className={styles.liContent}>
              支持Shell NFT和StakePoolV2 NFT的交易和转移
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              2.0 <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
            <p className={styles.liContent}>Shell设备NFT交易</p>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            继续创新并向更多玩家开放体验
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              “可视化您的所有Phala NFT”
              <code className={styles.Q2}>预计Q2</code>
            </h4>
            <p className={styles.liContent}>独特的实验功能</p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              发布PhalaWorld的第一个特色游戏化体验
            </h4>
            <p className={styles.liContent}>挑战其他玩家！</p>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>与RMRK合作推出CypherMod</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              CyperMod 1.0 <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
            <p className={styles.liContent}>您好EVM“Dressup”</p>
          </div>
        </div>
      </section>

      <div className={styles.hr}></div>

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>超级秘密产品</h2>
          <p className={styles.sectionSubTitle}>
            利用Phat Contracts和跨链能力的DeFi引擎
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            展示Phat Contract在行业定义的产品中提供的价值
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              1.0 <code className={styles.Q3}>预计Q2/Q3</code>
            </h4>
          </div>
        </div>
      </section>

      <div className={styles.hr}></div>

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>总体</h2>
          <p className={styles.sectionSubTitle}>
            在我们的4个核心产品之外，还有几个关键领域我们希望继续推动发展
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>提高我们的存在感和信息传递</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phala 品牌升级发布，更新全新的 phala.network
              <code className={styles.Q2}>预计Q2</code>
            </h4>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>更深入地投资研究和开发</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              更新技术白皮书
              <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
          </div>

          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              更新经济白皮书 vNext
              <code className={styles.Q3}>预计Q3/Q4</code>
            </h4>
          </div>
        </div>
      </section>
    </article>
  )
}
