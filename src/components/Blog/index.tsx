import { Text } from '../NotionBlock/Text'
import { renderBlock } from '../NotionBlock/block'
import React, { Fragment } from 'react'
import * as styles from './index.module.scss'
import NormalLayout from '../NormalLayout'

export default function Blog({ pageContext }: any) {
  const blog = pageContext.data

  return (
    <NormalLayout>
      <div className={styles.container}>
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
      </div>
    </NormalLayout>
  )
}
