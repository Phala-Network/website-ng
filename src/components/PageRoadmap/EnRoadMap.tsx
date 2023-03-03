import React from 'react'
import * as styles from './index.module.scss'

export default function EnRoadMap() {
  return (
    <div>
      <h2 className={styles.title}>Phat Contract RoadMap 2023</h2>
      {/* <h1 className="">TLDR</h1>
      <p className="">
        In 2022, Phala Network took major strides in 4 key areas,
        decentralisation, innovation, utility and community
      </p>
      <ul >
        <li style={{ listStyleType: 'none' }}>
          18k+ servers, providing 142k+ vCPUs, running in over 50 cities.
        </li>
      </ul>
      <ul >
        <li style={{ listStyleType: 'none' }}>
          1,434 commits and 408 PR's across all our repos
        </li>
      </ul>
      <ul >
        <li style={{ listStyleType: 'none' }}>
          Phat Contract, our flagship revolutionary product, is feature complete
          and in closed beta.
        </li>
      </ul>
      <ul >
        <li style={{ listStyleType: 'none' }}>
          141 events held in 14 countries and 18 cities worldwide, reaching over
          230,000 people.
        </li>
      </ul>
      <p className="">
        In 2023, Phala is going to build on all of this, and begin to change
        trustless computation.
      </p> */}

      <h2 className={styles.sectionTitle}>Phat Contract</h2>
      <p className={styles.sectionSubTitle}>
        Taking computation off chain, a serverless SDK you can write almost
        anything with.
      </p>
      <div className={styles.sectionHr} />
      <div>
        <div className={styles.ulTitle}>
          Establish Phat Contract as a core part of the Web 3 Builders stack.
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Phat Contract 1.0 on main net
            <code className={styles.Q1}>Expected Q1</code>
          </div>
          <div className={styles.liContent}>
            Revolutionary "Stake to Compute" model, say goodbye to gas fees
          </div>
        </div>
        <div className={styles.liItem}>
          <div className={styles.liLeft}></div>

          <div className={styles.liTitle}>
            "Phat Bricks"<code className={styles.Q1}>Expected Q1</code>
          </div>
          <div className={styles.liContent}>
            A no code experience to configure reusable Phat Contracts for
            specific use cases like Oracles.
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Even more "Phat Bricks"
            <code className={styles.Q2}>Expected Q2</code>
          </div>
          <div className={styles.liContent}>
            Ever wider multi-chain and use case support
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Phat Contract 2.0 <code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
          <div className={styles.liContent}>
            Asynchronous Phat Bricks. Opening up a whole new world of
            possibilities.
          </div>
        </div>
      </div>
      <div>
        <div className={styles.ulTitle}>
          Build the best developer experience in Web3.
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            One-click Phat Contract development environment
            <code className={styles.Q2}>Expected Q2</code>
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Phala Builders Program "Free Staking"
            <code className={styles.Q2}>Expected Q2</code>
          </div>
          <div className={styles.liContent}>
            Free compute for every new user
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Phat Contract Academy<code className={styles.Q3}>Expected Q3</code>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.ulTitle}>
          Take our place as industry pioneers.
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Showcase the best of Phat Legos and community innovation online and
            offline<code className={styles.yearRound}>Year Round</code>
          </div>
        </div>
      </div>

      <div className={styles.hr} />

      <h2 className={styles.sectionTitle}>Compute</h2>
      <p className={styles.sectionSubTitle}>
        Securely scaling your off-chain compute needs, a decentralized cloud of
        secure workers.
      </p>
      <div className={styles.sectionHr} />

      <div>
        <div className={styles.ulTitle}>Next-generation Phala Compute</div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            2nd Gen - Lay the foundation for Phat Contract 1.0 and the first
            "Public Good" cluster
            <code className={styles.Q1}>Expected Q1</code>
          </div>
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            3rd Gen - Implement full Layer 1 tokenomics to allow anyone to run a
            Phat Contract capable cluster
            <code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            4th Gen - "SideVM" release enabling long-running Phat Contract
            processes <code className={styles.expected2024}>Expected 2024</code>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.ulTitle}>
          Expand supported secure worker technologies
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            SGX 2.0<code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Add a second hardware implementation
            <code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
        </div>
      </div>

      <div className={styles.hr}></div>

      <h2 className={styles.sectionTitle}>PhalaWorld</h2>
      <p className={styles.sectionSubTitle}>
        A digital representation of your progression on the Phala Network
      </p>
      <div className={styles.sectionHr} />

      <div>
        <div className={styles.ulTitle}>
          Build out our NFT Marketplace experience
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>1.0</div>
          <div className={styles.liContent}>
            Supporting the trade &amp; transfer of Shell NFT and StakePoolV2 NFT
          </div>
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            2.0 <code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
          <div className={styles.liContent}>Shell Equipment NFT Trading</div>
        </div>
      </div>

      <div>
        <div className={styles.ulTitle}>
          Continue to innovate and open the experience to even more players
          <code className={styles.Q2}>Expected Q2</code>
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>"Visualise all your Phala NFT's"</div>
          <div className={styles.liContent}>A unique experimental feature</div>
        </div>
        <div className={styles.liItem}>
          <div className={styles.liLeft}></div>
          <div className={styles.liRight}>
            <div className={styles.liTitle}>
              Release PhalaWorld's first game feature
            </div>
            <div className={styles.liContent}>Challenge other players!</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.ulTitle}>
          Work with RMRK to bring CypherMod to market
        </div>
        <div className={styles.liItem}>
          <div className={styles.liLeft}></div>
          <div className={styles.liRight}>
            <div className={styles.liTitle}>
              CyperMod 1.0 <code className={styles.Q3}>Expected Q3/Q4</code>
            </div>
            <div className={styles.liContent}>Hello EVM "Dressup".</div>
          </div>
        </div>
      </div>

      <div className={styles.hr}></div>

      <h2 className={styles.sectionTitle}>Super Secret Product</h2>
      <p className={styles.sectionSubTitle}>
        A DeFi engine leveraging Phat Contracts cross-chain capability
      </p>
      <div className={styles.sectionHr} />

      <div>
        <div className={styles.ulTitle}>
          Show the true power and functionality of Phat Contract in a
          industry-defining product offering
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            1.0 <code className={styles.Q3}>Expected Q2/Q3</code>
          </div>
        </div>
      </div>

      <div className={styles.hr}></div>

      <h2 className={styles.sectionTitle}>Overall</h2>
      <p className={styles.sectionSubTitle}>
        Past our 4 core products, there are several key areas we want to
        continue pushing forward
      </p>
      <div className={styles.sectionHr} />

      <div>
        <div className={styles.ulTitle}>Elevate our Presence and Message</div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Release Phala Rebrand and all new
            <a href="http://phala.network">phala.network</a>
            <code className={styles.Q2}>Expected Q2</code>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.ulTitle}>
          Ever deeper investment in Research and Development
        </div>
        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Refreshed Technical Whitepaper
            <code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
        </div>

        <div className={styles.liItem}>
          <div className={styles.liTitle}>
            Tokenomics Whitepaper vNext
            <code className={styles.Q3}>Expected Q3/Q4</code>
          </div>
          <div className={styles.liContent}>Challenge other players!</div>
        </div>
      </div>
    </div>
  )
}
