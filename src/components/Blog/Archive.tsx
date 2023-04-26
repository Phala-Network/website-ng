import React from 'react';
import NormalLayout from '../NormalLayout';

import { cn } from '../../utils/cnHelper';
import PageTitle from '../PageTitle';
import PostCard from './PostCard';

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


export default function Portal({ pageContext: { posts, title } }: any) {
  return (
    <NormalLayout>
      <PageTitle en={title} zh={title} />
      <div className={cn('w-full h-[60px]')} />
      <div className="bg-gray-900 py-8 font-primary">
        <header className="max-w-7xl mx-auto mb-8 flex flex-row justify-between items-center">
          <h1 className="heading-2xl text-white">{title}</h1>
          <a href="/blog" className="btn btn-outline btn-phat">Back to Blog</a>
        </header>
        <div className='max-w-7xl mx-auto grid grid-cols-3 gap-4'>
          {posts.map((d: any) => {
            return (
              <div key={d.id} className='col-span-1'>
                <PostCard
                  title={d.title}
                  pubDate={d.publishedTime.split('T')[0]}
                  tags={d.tags}
                  coverImg={updateCover(d.headlineImg)}
                  url={d.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    </NormalLayout>
  )
}
