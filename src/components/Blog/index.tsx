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
      <div className="pt-16 max-w-3xl my-0 mx-auto">
        <h1>
          <Text text={blog.title} />
        </h1>
        <div>
          <img
            style={{ verticalAlign: 'middle', width: '100%' }}
            src={updateCover(blog.headlineImg)}
            alt=""
          />
        </div>
        <article style={{ padding: '20px' }}>
          {blog?.content?.map((block: any) => {
            return <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          }) || null}
        </article>
      </div>
    </NormalLayout>
  )
}
