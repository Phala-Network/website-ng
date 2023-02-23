import React, { Fragment } from 'react'
import { renderBlock } from '../NotionBlock/block'
import { Text } from '../NotionBlock/Text'

export default function Blog({ pageContext }: any) {
  const blog = pageContext.data

  return (
    <>
      <h1>
        <Text text={blog.title} />
      </h1>
      <div>
        <img
          style={{ verticalAlign: 'middle', width: '100%' }}
          src={blog.headlineImg}
          alt=""
        />
      </div>
      <article style={{ padding: '20px' }}>
        {blog?.content?.map((block: any) => {
          return <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        }) || null}
      </article>
    </>
  )
}
