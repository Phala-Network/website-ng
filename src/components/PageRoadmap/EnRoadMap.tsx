import React from 'react'
import * as styles from './index.module.scss'

export default function EnRoadMap () {
  return (
    <article className={styles.pageRoadmap}>
      <h1 className={styles.pageTitle}>Phala Network Roadmap 2023</h1>

      <section className={styles.pageSection}>
        <p className={styles.sectionSubTitle}>
          In 2022, Phala Network took major strides in 4 key areas,
          decentralisation, innovation, utility and community:
        </p>
        <ul className={styles.summaryStats}>
          <li>
            18k+ servers, providing 142k+ vCPUs, running in over 50 cities.
          </li>
          <li>1,434 commits and 408 PR's across all our repos.</li>
          <li>
            Phat Contract, our flagship revolutionary product, is feature
            complete and in closed beta.
          </li>
          <li>
            141 events held in 14 countries and 18 cities worldwide, reaching
            over 230,000 people.
          </li>
        </ul>
        <p className={styles.sectionSubTitle}>
          In 2023, Phala is going to build on all of this, and begin to change
          trustless computation.
        </p>
      </section>

      <hr className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>Phat Contract</h2>
          <p className={styles.sectionSubTitle}>
            Taking computation off-chain, a serverless SDK you can write almost
            anything with.
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Establish Phat Contract as a core part of the Web 3 Builders stack.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phat Contract 1.0 on mainnet
              <code className={styles.Q1}>Expected Q1</code>
            </h4>
            <p className={styles.liContent}>
              Revolutionary "Stake to Compute" model, say goodbye to gas fees.
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              "Phat Bricks"<code className={styles.Q1}>Expected Q1</code>
            </h4>
            <p className={styles.liContent}>
              A no-code experience to configure reusable Phat Contract for
              specific use cases like Oracles.
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Even more "Phat Bricks"
              <code className={styles.Q2}>Expected Q2</code>
            </h4>
            <p className={styles.liContent}>
              Ever wider multi-chain and use case support.
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phat Contract 2.0{' '}
              <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
            <p className={styles.liContent}>
              Asynchronous Phat Bricks. Opening up a whole new world of
              possibilities.
            </p>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Build the best developer experience in Web3.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              One-click Phat Contract development environment.
              <code className={styles.Q2}>Expected Q2</code>
            </h4>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phala Builders Program "Free Staking"
              <code className={styles.Q2}>Expected Q2</code>
            </h4>
            <p className={styles.liContent}>Free compute for every new user.</p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Phat Contract Academy.
              <code className={styles.Q3}>Expected Q3</code>
            </h4>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Take our place as industry pioneers.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Showcase the best of Phat Bricks and community innovation online
              and offline. <code className={styles.yearRound}>Year Round</code>
            </h4>
          </div>
        </div>
      </section>

      <hr className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>Compute</h2>
          <p className={styles.sectionSubTitle}>
            Securely scaling your off-chain compute needs, a decentralized cloud
            of secure workers.
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>Next-generation Phala Compute.</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              2nd Gen - Lay the foundation for Phat Contract 1.0 and the first
              "Public Good" cluster.
              <code className={styles.Q1}>Expected Q1</code>
            </h4>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              3rd Gen - Implement full Layer 1 tokenomics to allow anyone to run
              a Phat Contract capable cluster.
              <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              4th Gen - "SideVM" release enabling long-running Phat Contract
              processes.{' '}
              <code className={styles.expected2024}>Expected 2024</code>
            </h4>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Expand supported secure worker technologies.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              SGX 2.0.<code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Add a second hardware implementation.
              <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
          </div>
        </div>
      </section>

      <hr className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>PhalaWorld</h2>
          <p className={styles.sectionSubTitle}>
            A digital representation of your progression on the Phala Network.
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Build out our NFT Marketplace experience.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              1.0<code className={styles.Q1}>Expected Q1</code>
            </h4>
            <p className={styles.liContent}>
              Supporting the trade &amp; transfer of Shell NFT and StakePoolV2
              NFT.
            </p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              2.0 <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
            <p className={styles.liContent}>Shell Equipment NFT Trading.</p>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Continue to innovate and open the experience to even more players.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              "Visualise all your Phala NFT's"
              <code className={styles.Q2}>Expected Q2</code>
            </h4>
            <p className={styles.liContent}>A unique experimental feature.</p>
          </div>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Release PhalaWorld's first game feature.
              <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
            <p className={styles.liContent}>Challenge other players!</p>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Work with RMRK to bring CypherMOD to market.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              CyperMod 1.0 <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
            <p className={styles.liContent}>Hello EVM "Dressup".</p>
          </div>
        </div>
      </section>

      <hr className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>Super Secret Product</h2>
          <p className={styles.sectionSubTitle}>
            A DeFi engine leveraging Phat Contract cross-chain capability.
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Show the true power and functionality of Phat Contract in a
            industry-defining product offering.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              1.0 <code className={styles.Q3}>Expected Q2/Q3</code>
            </h4>
          </div>
        </div>
      </section>

      <hr className={styles.hr} />

      <section className={styles.pageSection}>
        <header>
          <h2 className={styles.sectionTitle}>Overall</h2>
          <p className={styles.sectionSubTitle}>
            Past our 4 core products, there are several key areas we want to
            continue pushing forward.
          </p>
        </header>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>Elevate our Presence and Message.</h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Release Phala Rebrand and all new phala.network.
              <code className={styles.Q2}>Expected Q2</code>
            </h4>
          </div>
        </div>

        <div className={styles.sectionContentGroup}>
          <h3 className={styles.ulTitle}>
            Ever deeper investment in Research and Development.
          </h3>
          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Refreshed technical whitepaper.
              <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
          </div>

          <div className={styles.liItem}>
            <h4 className={styles.liTitle}>
              Tokenomics whitepaper vNext.
              <code className={styles.Q3}>Expected Q3/Q4</code>
            </h4>
          </div>
        </div>
      </section>
    </article>
  )
}
