import { Text } from '../NotionBlock/Text'
import NormalLayout from '../NormalLayout'
import React from 'react'

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

export default function BlogList ({ pageContext }: any) {
  const data = pageContext.data

  return (
    <NormalLayout>
      <div className="py-20">
        <div className='max-w-7xl mx-auto grid grid-cols-12 gap-4'>
          {data.map((d: any) => {
            return (
              <div key={d.id} className='col-span-4 bg-gray-50 rounded overflow-hidden'>
                <a href={`/blog${d.url.split('?')[0]}`}>
                  <img
                    className="object-cover h-52 w-full"
                    src={updateCover(d.headlineImg)}
                    alt={d.title}
                  />
                </a>
                <h2 className='px-4 pt-2 text-lg font-medium hover:underline'>
                  <a href={`/blog${d.url.split('?')[0]}`}>
                    {d.title}
                  </a>
                </h2>
                <p className="px-4 py-2 text-sm font-extralight text-gray-500">{d.last_edited_time.split('T')[0]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </NormalLayout>
  )
}
