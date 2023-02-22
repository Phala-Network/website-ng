import React from 'react'

export default function Blog({ pageContext }: any) {
  const blogList = pageContext.data

  return (
    <div>
      {blogList.map((blog: any) => {
        return <div key={blog.id}>{blog.title[0].plain_text}</div>
      })}
    </div>
  )
}
