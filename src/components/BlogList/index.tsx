import React from 'react'

export default function BlogList({ pageContext }: any) {
  const data = pageContext.data

  return (
    <div>
      {data.map((d: any) => {
        return <div key={d.id}>{d.title[0].plain_text}</div>
      })}
    </div>
  )
}
