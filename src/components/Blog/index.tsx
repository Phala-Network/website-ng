import { Text } from '../NotionBlock/Text'
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

export default function Blog ({ pageContext }: any) {
  const blog = pageContext.data

  return (
    <NormalLayout>
      <div className="pt-14 max-w-3xl my-0 mx-auto bg-gray-50">
        <header className="flex flex-col gap-4">
          <a href={`/blog${blog.url}`}>
            <img
              style={{ verticalAlign: 'middle', width: '100%' }}
              src={updateCover(blog.headlineImg)}
              alt=""
            />
          </a>
          <h1 className='text-3xl font-extrabold tracking-tight px-6'>
            <a href="/blog" className='block text-sm font-light text-gray-600 hover:underline leading-6'>
              Blog
            </a>
            <a href={`/blog${blog.url}`} className='hover:underline transition-all'>
              {blog.title}
            </a>
          </h1>
          <p className="px-6 font-extralight text-gray-500">{blog.last_edited_time.split('T')[0]}</p>
        </header>
        <article className='prose prose-neutral prose-headings:text-2xl prose-headings:mt-6 px-6 pb-20'>
          {blog?.content?.map((block: any) => {
            return <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          }) || null}
        </article>
      </div>
    </NormalLayout>
  )
}
