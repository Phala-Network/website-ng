// import { Text } from '../NotionBlock/Text'
import { cn } from '../../utils/cnHelper';
import PageTitle from '../PageTitle';
import { renderBlock } from '../NotionBlock/block'
import NormalLayout from '../NormalLayout'
import React, { Fragment } from 'react'

function updateCover (s: string) {
  const prefix = 'https://cdn-images-1.medium.com/'
  if (s.indexOf(prefix) === -1) {
    return s
  }
  const prefixV2 = 'https://cdn-images-1.medium.com/v2/'

  const isV2 = s.indexOf(prefixV2) > -1
  const r = s
    .split('/')
    .filter((s) => Boolean(s))
    .pop()
  return `${isV2 ? prefixV2 : prefix}${r}`
}

export default function Post({ pageContext: { post, prev, next, tagInclusivePosts, latestPosts, relatedPosts } }: any) {
  return (
    <NormalLayout>
      <PageTitle en={post.title} zh={post.title} />
      <div className={cn('w-full h-[60px]')} />
      <div className="bg-gray-900 font-primary">
        <div className="max-w-7xl grid grid-cols-12 gap-4 mx-auto p-4">
          <main className="col-span-12 md:col-span-7 xl:col-span-8 card-elevated overflow-hidden bg-gray-50">
            <header className="flex flex-col gap-4">
              <a href={`/posts${post.url}`} className="-mt-0.5">
                <img
                  className="aspect-video w-full"
                  src={updateCover(post.headlineImg)}
                  alt=""
                />
              </a>
              <h1 className='heading-lg px-6'>
                <div className="text-sm font-light flex flex-row leading-6 gap-0.5">
                  <a href="/blog" className='text-gray-500 hover:underline'>
                    Blog
                  </a>
                  <span className='text-gray-300'>/</span>
                  <a href={`/archives/${post.publishedTime.split('-')[0]}`} className='text-gray-500 hover:underline'>
                    {post.publishedTime.split('-')[0]}
                  </a>
                  <span className='text-gray-300'>/</span>
                  <a href={`/archives/${post.publishedTime.split('-')[0]}/${post.publishedTime.split('-')[1]}`} className='text-gray-500 hover:underline'>
                    {post.publishedTime.split('-')[1]}
                  </a>
                </div>
                <a href={`/posts${post.url.split('?')[0]}`} className='hover:underline transition-all'>
                  {post.title}
                </a>
              </h1>
              <ul className="px-6 -ml-1">
                {post.tags.map((tag: any, idx: number) => (
                  <li key={idx}>
                    <a href={`/tags/${encodeURIComponent(tag.name)}`} className="tag tag-brand hover:bg-brand-600 hover:text-white transition-all">
                      {tag.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="px-6 font-extralight text-gray-500">{post.publishedTime.split('T')[0]}</p>
            </header>
            <article className='prose prose-neutral prose-headings:text-2xl prose-headings:mt-6 px-6 pb-20'>
              {post?.content?.map((block: any) => {
                return <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              }) || null}
            </article>
            <footer className="px-6 pt-3 pb-6 flex flex-col gap-3 border-t border-solid border-gray-900">
              {prev ? (
                <div>
                  <a href={`/posts${prev.url}`} className="text-blue-400 hover:underline" title={prev.title}>
                    ← {prev.title}
                  </a>
                </div>
              ) : null}
              {next ? (
                <div className="text-right">
                  <a href={`/posts${next.url}`} className="text-blue-400 hover:underline">
                    {next.title} →
                  </a>
                </div>
              ) : null}
            </footer>
          </main>

          <aside className="col-span-12 md:col-span-5 xl:col-span-4 mt-0.5 flex flex-col gap-6">
            <div className="card-elevated bg-phat-50 px-4 py-3 flex flex-col gap-2">
              <h3 className="heading-md text-gray-900">Recent Posts</h3>
              <ul className="flex flex-col gap-2">
                {latestPosts.map((post: any, idx: number) => (
                  <li key={idx} className="text-gray-400">
                    <a href={`/posts${post.url}`} className="text-phat-400 hover:underline">
                      {post.title}
                    </a>
                    <div className="text-xs">{post.publishedTime.split('T')[0]}</div>
                  </li>
                ))}
              </ul>
            </div>

            {relatedPosts.length > 0 ? (
              <div className="card-elevated bg-phat-50 px-4 py-3 flex flex-col gap-2">
                <h3 className="heading-md text-gray-900">Related Posts</h3>
                <ul className="flex flex-col gap-2">
                  {relatedPosts.map((post: any, idx: number) => (
                    <li key={idx} className="text-gray-400">
                      <a href={`/posts${post.url}`} className="text-phat-400 hover:underline">
                        {post.title}
                      </a>
                      <div className="text-xs">{post.publishedTime.split('T')[0]}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {tagInclusivePosts.length > 0 ? (
              <div className="card-elevated bg-phat-50 px-4 py-3 flex flex-col gap-2">
                <h3 className="heading-md text-gray-900">Similar Posts</h3>
                <ul className="flex flex-col gap-2">
                  {tagInclusivePosts.map((post: any, idx: number) => (
                    <li key={idx} className="text-gray-400">
                      <a href={`/posts${post.url}`} className="text-phat-400 hover:underline">
                        {post.title}
                      </a>
                      <div className="text-xs">{post.publishedTime.split('T')[0]}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </NormalLayout>
  )
}
