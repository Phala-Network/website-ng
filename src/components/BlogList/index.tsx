import { Text } from '../NotionBlock/Text'
import React from 'react'

export default function BlogList ({ pageContext }: any) {
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
