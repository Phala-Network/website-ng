import { Text } from '../NotionBlock/Text'
import NormalLayout from '../NormalLayout'
import React from 'react'

export default function BlogList ({ pageContext }: any) {
  const data = pageContext.data

  return (
    <NormalLayout>
      <div className="pt-16 max-w-3xl my-0 mx-auto">
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
    </NormalLayout>
  )
}
