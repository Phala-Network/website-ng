import React from 'react'
import { Text } from '../NotionBlock/Text'

export default function BlogList({ pageContext }: any) {
  const data = pageContext.data

  return (
    <div>
      {data.map((d: any) => {
        return (
          <div key={d.id}>
            <a href={`/blog${d.url}`}>
              <Text text={d.title} />
            </a>
          </div>
        )
      })}
    </div>
  )
}
