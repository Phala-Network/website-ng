import React from 'react';
import NormalLayout from '../components/NormalLayout';

import { cn } from '../utils/cnHelper';
import PageTitle from '../components/PageTitle';
// import * as styles from '../styles/phat-contracts.scss';


function LatestUpdate() {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 flex flex-row items-center transition-all ring-1 ring-phat-500/60 hover:ring-phat-500 bg-white/75">
        <span className={cn('text-base text-black')}>
          Pick Up the Pace, Testers! Phat Contract’s Closed Beta is Ending Soon!
        </span>
        <a
          href="https://medium.com/phala-network/pick-up-the-pace-testers-phat-contracts-closed-beta-is-ending-soon-1c3f169d8687"
          className="ml-2 font-semibold text-gray-800 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  )
}

function HeroScreen() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <LatestUpdate />
          <div className="text-center">
            <h1 className="heading-2xl text-white tracking-tight">
              Smart Contracts Supercharged
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Embrace the future of Web3 offchain computation. Access the internet, boost performance, fully multichain, and ultimate data security, all with Phat Contract
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://phat.phala.network"
                className={cn("btn btn-brand")}
                target="_blank"
                rel="noopener"
              >
                Explore Now
              </a>
              <a
                href="https://wiki.phala.network/en-us/build/stateless/create-contract/"
                className="text-sm font-semibold leading-6 text-white"
                target="_blank"
                rel="noopener"
              >
                Develop with Phat Contracts <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}


const features = [
  {
    name: 'Internet Access: Bridge the Gap Between Web3 and Web2',
    description: 'Send HTTP/HTTPS requests directly from your smart contracts, enabling seamless integration with any Web2 APIs and unlocking a world of possibilities for your dApps.',
  },
  {
    name: 'Multichain: Universal Compatibility Across EVM and Substrate Blockchains',
    description: "Easily connect Phat Contracts to your EVM or Substrate blockchains without the need for a bridge, expanding your smart contract's capabilities.",
  },
  {
    name: 'Fast & Powerful Computation: Zero Gas and Zero latency',
    description: "Execute intense off-chain computations in real-time while bypassing transaction fees and network latency, enhancing your dApps' functionality and user experience with minimum cost.",
  },
  {
    name: 'Decentralized Network: Secure, Robust, and Trustworthy Infrastructure',
    description: 'Phat Contract runs on Phala Network, a web of 20,000+ secure enclave workers distributed globally, ensuring the confidentiality and security of your applications.',
  }
]

function FeaturesSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h3 className="mt-2 heading-xl text-white">
            Unlock Limitless Web3 Potential with Phat Contracts
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Enhance your smart contracts with limitless possibilities by accessing the internet, integrating with Web2 APIs, and harnessing the power of fast &amp; powerful computation. Experience the ease of use, multichain support, and security in a decentralized network.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col gap-4">
                <dt className="flex flex-col gap-1">
                  <h4 className="heading-lg text-phat-400">
                    {feature.name.split(':')[0]}
                  </h4>
                  <p className="heading-md text-gray-200">{feature.name.split(':')[1].trim()}</p>
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={cn("w-full mt-12 flex flex-row justify-center")}>
          <a
            href="https://wiki.phala.network/en-us/build/stateless/create-contract/"
            className={cn('btn btn-phat btn-lg')}
            target="_blank"
            rel="noopener"
          >
            Create your first Phat Contract
          </a>
        </div>
      </div>
    </div>
  )
}


function ShowCaseNoCode() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden card-filled bg-phat-800/90 px-6 py-20 sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="heading-lg text-white">
                Simplify Your Development Process with Our No-Code Tool
              </h2>
              <div className="mt-6 text-base leading-7 text-gray-300 flex flex-col gap-6">
                <p>
                  Phat Contract is designed with developers in mind, providing an effortless way to build and deploy off-chain computations without writing a single line of code. Our intuitive no-code developer console enables you to create oracles and other common use cases by leveraging predefined blueprints, allowing you to save time and focus on what truly matters.
                </p>
                <p>
                  Don't miss the chance to revolutionize your development process. Subscribe to our newsletter and be the first to know about the no-code tool's launch.
                </p>
              </div>
            </div>
            <img
              src="https://media.discordapp.net/attachments/1054315024052650054/1098713021896986644/Lens_Oracle_Onepager__1.png"
              alt="Product screenshot"
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <div className="flex flex-row gap-1">
                <input
                  placeholder="Enter your email address"
                  className={cn(
                    "px-3 py-2 border border-solid border-[#E2E8F0] rounded min-w-[20rem]"
                  )}
                />
                <button
                  className={cn('btn btn-phat')}
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-white">Stay informed about our no-code tool launch!</p>
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-phat-50 to-phat-900 opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


interface TweetCardProps {
  avatarUrl: string
  nickName: string
  handle: string
  url: string
  formattedDate: string
  children?: React.ReactNode
}

function TweetCard({ avatarUrl, nickName, handle, url, formattedDate, children }: TweetCardProps) {
  return (
    <figure className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border w-full shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full" src={avatarUrl} />
          <div className="ml-2 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block">{nickName}</span>
            <span className="text-gray-500 dark:text-gray-400 font-normal block">@{handle}</span>
          </div>
        </div>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full h-10 w-10 flex flex-row justify-center items-center transition-all duration-300",
            "text-blue-400 dark:text-white hover:text-white hover:bg-blue-400",
          )}
        >
          <svg className="transition-all h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </a>
      </div>
      <div className="text-gray-900 dark:text-white mt-3 text-base leading-snug flex flex-col gap-2.5">
        {children}
      </div>
      <p className="text-sm mt-3">
        <a href={url} className={cn("text-gray-500 dark:text-gray-400 hover:underline")}>
          {formattedDate}
        </a>
      </p>
    </figure>
  )
}

function InnerLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className={cn("text-blue-500 hover:underline")} rel="noopener noreferrer">
      {children}
    </a>
  )
}

function Testimonials() {
  return (
    <div className="relative isolate bg-gray-900 pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          // className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-phat-600 to-phat-100"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className={cn(
            "ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg]",
            // "bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]",
            "bg-gradient-to-tr from-phat-600 to-phat-100",
            "xl:ml-0 xl:mr-[calc(50%-12rem)]"
          )}
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h3 className="heading-xl text-white">
            Real journeys, real achievements, fueled by Phat Contract.
          </h3>
        </div>
        <section
          className={cn(
            "mx-auto mt-16 max-w-4xl sm:mt-20 xl:mx-0 xl:max-w-none",
            // "grid md:grid-cols-2 xl:grid-cols-3 gap-4"
            'md:columns-2 xl:columns-3 gap-4'
          )}
        >
          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1442069884272140300/u0_w5wDD_400x400.jpg"
              nickName="Soptq🔰"
              handle="realsoptq"
              url="https://twitter.com/realsoptq/status/1642849864706052096"
              formattedDate="7:21 PM · Apr 3, 2023"
            >
              <p>
                tbh, <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink> has the most satisfying development experience on the Polkadot ecosystem.
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1610261733532205060/ZmiJZpdN_400x400.jpg"
              nickName="C H A R L Ξ S ⚛️🔆"
              handle="charlesace_"
              url="https://twitter.com/charlesace_/status/1647599601128558593"
              formattedDate="9:55 PM · Apr 16, 2023"
            >
              <p>Enters Phat Contract!</p>
              <p>This is <InnerLink href="https://twitter.com/hashtag/Phala">#Phala</InnerLink>'s flagship product that is deemed to revolutionize the blockchain space, especially as it relates to smart contracts. It is a novel programming model for Off-chain Computation, popularly called Fat Contract due to its robust features.</p>
              <p>5/</p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1620172230004178944/95AF7_MG_400x400.jpg"
              nickName="Rom1.io"
              handle="RCajina"
              url="https://twitter.com/RCajina/status/1648972638973227008"
              formattedDate="4:51 PM · Apr 20, 2023"
            >
              <p>
                Blessed to have had the chance to try out <InnerLink href="https://twitter.com/hashtag/PhatContract">#PhatContract</InnerLink> and grateful to{' '}
                <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink> and <InnerLink href="https://twitter.com/phala_fr">@phala_fr</InnerLink>{' '}
                for making it happen! A mind-blowing experience that has broadened my horizons in the <InnerLink href="https://twitter.com/hashtag/Blockchain">#Blockchain</InnerLink>
                realm 🚀 <InnerLink href="https://twitter.com/hashtag/innovation">#innovation</InnerLink> <InnerLink href="https://twitter.com/hashtag/crypto">#crypto</InnerLink> 🤖✨
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1502781909289648133/h9g6PbYY_400x400.jpg"
              nickName="GuiGou"
              handle="GuiGou12358"
              url="https://twitter.com/GuiGou12358/status/1649107493266522129"
              formattedDate="1:47 AM · Apr 21, 2023"
            >
              <p>
                Glad to play with <InnerLink href="https://twitter.com/hashtag/PhatContract">#PhatContract</InnerLink> on{" "}
                <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink>{" "}
                to replace centralized offchain computing by decentralized onchain computing. <InnerLink href="https://twitter.com/phala_fr">@phala_fr</InnerLink>
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1622635383463747584/cS4o3mjF_400x400.jpg"
              nickName="Janemake"
              handle="JanemakeCrypto"
              url="https://twitter.com/JanemakeCrypto/status/1649126207995117579"
              formattedDate="3:01 PM · Apr 21, 2023"
            >
              <p>
                Exciting moments learning <InnerLink href="https://twitter.com/hashtag/PhatContract">#PhatContract</InnerLink> implementations during the
                <InnerLink href="https://twitter.com/hashtag/ClosedBeta">#ClosedBeta</InnerLink>. The Phat Contract is a contract that could run off-chain
                computations like http requests thanks to <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink>
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1641707673275052033/F4q3Twkd_400x400.jpg"
              nickName="The Scarlet Thread"
              handle="TheScarletThr"
              url="https://twitter.com/TheScarletThr/status/1648603479496073216"
              formattedDate="4:24 PM · Apr 19, 2023"
            >
              <p>
                By moving some computation offchain, these limitations or boundaries can be pushed. Phat Contract offers many rich benefits, for example supporting computation-intensive tasks in a more cost-effective  and efficient way and serve low-latency real-time computation.
              </p>
            </TweetCard>
          </article>
        </section>
      </div>
    </div>
  )
}

const faqs = [
  {
    id: 1,
    question: "What benefits does Phat Contract offer over traditional smart contracts?",
    answer:
      "Phat Contract provides enhanced latency, database support, network access, and a wider variety of libraries, eliminating the need for centralized cloud solutions. It also offers hardware-based encryption for privacy preservation, zero-latency and zero-gas fee interactions, and seamless integration with Web2 services as well as other blockchains.",
  },
  {
    id: 2,
    question: "How does Phat Contract differ from Web2 serverless services?",
    answer:
      "While Phat Contract shares similar functionalities, it boasts unique Web3 features such as enforced execution, a decentralized trustless infrastructure, easy integration with other blockchains, and an open contract ecosystem that promotes efficient development and application possibilities.",
  },
  {
    id: 3,
    question: "What programming language can I use with Phat Contract, and what libraries are available?",
    answer:
      "Phat Contract supports the Rust-based ink! language, allowing you to utilize a wide range of no_std supported libraries. Future updates will include std support, granting access to an even broader selection of libraries for greater flexibility.",
  },
  {
    id: 4,
    question: "Can I trust Phat Contract with my sensitive data?",
    answer:
      "Yes! Phat Contract employs hardware-based encryption throughout its lifecycle to ensure your data is secure and private. Rather than requiring trust in the Phala team, you can rely on the robust code and Secure-Enclave-based hardware for data processing.",
  },
  // More questions...
]

function Faqs() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="heading-xl text-white">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
          <a href="#" className="font-semibold text-phat-400 hover:text-phat-500">
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id} className="flex flex-col gap-2">
                <dt className="heading-md text-phat-400">{faq.question}</dt>
                <dd className="text-base leading-7 text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


const posts = [
  {
    id: 1,
    title: 'Pick Up the Pace, Testers! Phat Contract’s Closed Beta is Ending Soon!',
    href: 'https://medium.com/phala-network/pick-up-the-pace-testers-phat-contracts-closed-beta-is-ending-soon-1c3f169d8687',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eOOABmC3wJZNFgjAWtkP4g.png',
    date: 'Mar 27, 2023',
    datetime: '2023-03-27',
  },
  {
    id: 2,
    title: 'Phala Is Coming To EthDenver! Explore The Future of Trustless Backend With The Phala Team',
    href: 'https://medium.com/phala-network/phala-is-coming-to-ethdenver-explore-the-future-of-trustless-backend-with-the-phala-team-bff9b5ab63ca',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DJGUZLS-aHJ5BrAosp6dUg.png',
    date: 'Feb 16, 2023',
    datetime: '2023-02-16',
  },
  {
    id: 3,
    title: 'Phala Network Introduces Phat Contract Into SaaS3 to Build A Highly Scalable Oracle',
    href: 'https://medium.com/phala-network/phala-network-introduces-phat-contract-into-saas3-to-build-a-highly-scalable-oracle-85ce52a18c7d',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/0*oPHfcYqqYr4uENH7',
    date: 'Jan 12, 2023',
    datetime: '2023-01-12',
  },
  // More posts...
]

function RecentPosts() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What's New</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover aspect-video" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-400">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
              </div>
              <h3 className="mt-1 heading-md leading-7 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
        <div className={cn("w-full mt-12 flex flex-row justify-center")}>
          <a
            href="https://medium.com/phala-network"
            className={cn('btn btn-phat btn-lg')}
            target="_blank"
            rel="noopener"
          >
            Read more News about Phat Contracts
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PhatContractsLandingPage() {
  return (
    <NormalLayout newsletter={false}>
      <PageTitle en="Phat Contracts" zh="Phat Contracts" />
      <div className={cn('w-full h-[60px]')} />
      <div className="font-primary">
        <HeroScreen />
        <FeaturesSection />
        <ShowCaseNoCode />
        <Testimonials />
        <Faqs />
        <RecentPosts />
      </div>
    </NormalLayout>
  )
}

