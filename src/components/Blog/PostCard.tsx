import React from 'react';
import { cn } from '../../utils/cnHelper';

export interface PostTag {
  id: string
  name: string
}

export interface PostCardProps {
  title: string
  pubDate: string
  tags: PostTag[]
  coverImg: string
  url: string
}

export default function PostCard({ title, pubDate, tags, coverImg, url }: PostCardProps) {
  const href = '/posts' + url.split('?')[0]
  return (
    <article className="card-elevated overflow-hidden">
      <div className={cn('aspect-video overflow-hidden')}>
        <img src={coverImg} alt={title} className={cn('w-full h-full border-b border-solid border-gray-100')} />
      </div>
      <header className="py-3 px-4 flex flex-col gap-2">
        <ul className="-ml-1 flex flex-row gap-1 flex-wrap">
          {tags.map((tag, idx) => (
            <li key={idx}>
              <a href={`/tags/${encodeURIComponent(tag.name)}`} className="tag tag-brand hover:bg-brand-600 hover:text-white transition-all">
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
        <h2 className='heading-md h-[7rem]'>
          <a href={href}>
            {title}
          </a>
        </h2>
        <div className="text-sm font-extralight text-gray-500">{pubDate.split('T')[0]}</div>
      </header>
    </article>
  )
}
