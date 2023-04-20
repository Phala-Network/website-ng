import React from 'react';
import NormalLayout from '../components/NormalLayout';

import { cn } from '../utils/cnHelper';
import PageTitle from '../components/PageTitle';
// import * as styles from '../styles/phat-contracts.scss';


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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 flex flex-row items-center transition-all ring-1 ring-phat-500/60 hover:ring-phat-500">
              <span className={cn('text-base text-gray-500')}>
                Pick Up the Pace, Testers! Phat Contract’s Closed Beta is Ending Soon!
              </span>
              <a
                href="https://medium.com/phala-network/pick-up-the-pace-testers-phat-contracts-closed-beta-is-ending-soon-1c3f169d8687"
                className="ml-2 font-semibold text-white/60 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Trustless. Permissionless. Performance.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Off-chain infrastructure to deliver Web3 computation resources.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://phat.phala.network"
                className={cn(
                  "bg-phat-400 px-6 py-2.5 text-white rounded-[6px] transition-all",
                  "text-lg font-semibold",
                  "hover:bg-phat-600",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phat-400",
                )}
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
    name: 'Smart Contract Evolution',
    description:
      'Phat Contract revolutionizes smart contracts, offering enhanced latency, database support, network access, and library availability. Eliminate dependency on centralized cloud solutions and take your Web3 development to the next level.',
    href: '#',
    // icon: CloudArrowUpIcon,
  },
  {
    name: 'Privacy & Connectivity',
    description:
      'Trust in hardware-based encryption and enjoy zero-latency, zero-gas fee interactions with native HTTP request support. Seamlessly connect with Web2 services, build Oracles, or establish cross-chain operations with other blockchains.',
    href: '#',
    // icon: LockClosedIcon,
  },
  {
    name: 'Rust Library Freedom',
    description:
      'Write contracts with Rust-based ink! language and access a comprehensive range of no_std supported libraries. Future updates will widen possibilities by including support for std and any library of your choice.',
    href: '#',
    // icon: ArrowPathIcon,
  },
  {
    name: 'Trustless Infrastructure',
    description:
      'Harness the power of enforced execution, open-source infrastructure, and easy integration with other blockchains. The open contract ecosystem allows efficient development, and tapping into existing contracts for limitless application possibilities.',
    href: '#',
  }
]

function FeaturesSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unlock Limitless Web3 Potential with Phat Contracts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience the power of Phala Network's decentralized serverless compute cloud, enabling developers to deploy programs on secure hardware workers with ultra-low latency and no transaction fees. Seamlessly connect to any chain or application, all while upholding Web3 principles.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-phat-300">
                  {/* <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" /> */}
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-white-400 hover:underline">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={cn("w-full mt-12 flex flex-row justify-center")}>
          <a
            href="https://wiki.phala.network/en-us/build/stateless/create-contract/"
            className={cn(
              "bg-phat-400 px-6 py-2.5 text-white rounded-[6px] transition-all",
              "text-lg font-semibold",
              "hover:bg-phat-600",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phat-400",
            )}
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


const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}

const testimonials = [
  [
    [
      {
        body: 'tbh, @PhalaNetwork has the most satisfying development experience on the Polkadot ecosystem.',
        author: {
          name: 'Soptq🔰',
          handle: 'realsoptq',
          imageUrl:
            'https://pbs.twimg.com/profile_images/1442069884272140300/u0_w5wDD_400x400.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
]

function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
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
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real journeys, real achievements, fueled by Phat Contract.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={cn(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What's New</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
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
            className={cn(
              "bg-phat-400 px-6 py-2.5 text-white rounded-[6px] transition-all",
              "text-lg font-semibold",
              "hover:bg-phat-600",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phat-400",
            )}
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
      <HeroScreen />
      <FeaturesSection />
      <Testimonials />
      <Faqs />
      <RecentPosts />
    </NormalLayout>
  )
}

