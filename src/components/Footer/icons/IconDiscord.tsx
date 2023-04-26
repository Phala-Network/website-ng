import React from 'react'

const IconDiscord = ({ className }: { className?: string }) => {
  if (!className) {
    return (
      <svg
        width='27'
        height='22'
        viewBox='0 0 27 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.8 1.3l.3.3C5.9 2.8 4 4.6 4 4.6l1.3-.7c2.5-1 4.5-1.4 5.3-1.4h.4a19.5 19.5 0 0111.6 2.1s-1.8-1.7-5.7-3l.3-.3s3.1 0 6.5 2.4c0 0 3.3 6 3.3 13.5 0 0-2 3.3-7 3.5 0 0-1-1-1.6-1.9 3-.8 4.2-2.7 4.2-2.7-1 .6-1.9 1-2.7 1.3a16.2 16.2 0 01-12.7 0 13.5 13.5 0 01-1.8-.8h-.1l-.1-.1-.6-.4s1 1.8 4 2.7l-1.5 2C1.9 20.4 0 17.1 0 17.1 0 9.8 3.3 3.7 3.3 3.7c3.2-2.4 6.2-2.4 6.5-2.4zm-.6 8.6c-1.3 0-2.4 1.2-2.4 2.6 0 1.4 1 2.5 2.4 2.5 1.3 0 2.3-1.1 2.3-2.5s-1-2.6-2.3-2.6zm8.4 0c-1.3 0-2.3 1.2-2.3 2.6 0 1.4 1 2.5 2.3 2.5C19 15 20 14 20 12.5s-1-2.6-2.4-2.6z'
          fill='#8C8C8C'
        />
      </svg>
    )
  }
  return (
    <svg
      className={className}
      viewBox='0 0 27 22'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.8 1.3l.3.3C5.9 2.8 4 4.6 4 4.6l1.3-.7c2.5-1 4.5-1.4 5.3-1.4h.4a19.5 19.5 0 0111.6 2.1s-1.8-1.7-5.7-3l.3-.3s3.1 0 6.5 2.4c0 0 3.3 6 3.3 13.5 0 0-2 3.3-7 3.5 0 0-1-1-1.6-1.9 3-.8 4.2-2.7 4.2-2.7-1 .6-1.9 1-2.7 1.3a16.2 16.2 0 01-12.7 0 13.5 13.5 0 01-1.8-.8h-.1l-.1-.1-.6-.4s1 1.8 4 2.7l-1.5 2C1.9 20.4 0 17.1 0 17.1 0 9.8 3.3 3.7 3.3 3.7c3.2-2.4 6.2-2.4 6.5-2.4zm-.6 8.6c-1.3 0-2.4 1.2-2.4 2.6 0 1.4 1 2.5 2.4 2.5 1.3 0 2.3-1.1 2.3-2.5s-1-2.6-2.3-2.6zm8.4 0c-1.3 0-2.3 1.2-2.3 2.6 0 1.4 1 2.5 2.3 2.5C19 15 20 14 20 12.5s-1-2.6-2.4-2.6z'
        fill='currentColor'
      />
    </svg>
  )
}

export default IconDiscord
