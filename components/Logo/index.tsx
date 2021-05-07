import React from 'react'
import styles from './index.module.scss'

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <div className={styles.logo}>
      <svg
        // @ts-ignore: For svg element.
        class={styles.khala}
        width="22"
        height="23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 12h6V6H6v6zM12 18h6v-6h-6v6z"
          fill="#D9D9D9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 23h6v-6h-6v6zM0 23h6V0H0v23zM12 6h10V0H12v6z"
          fill="#D9D9D9"
        />
      </svg>
      <svg
        // @ts-ignore: For svg element.
        className={styles.phala}
        width='23'
        height='23'
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='4.61499'
          y='11.5'
          width='13.771'
          height='4.591'
          fill='#D9D9D9'
        />
        <rect
          x='18.386'
          y='4.61401'
          width='4.591'
          height='6.886'
          fill='#D9D9D9'
        />
        <path
          d='M4.61501 16.0911H0.0230103V17.2391V18.3871V22.9771H4.61401V18.3871H4.61501V16.0911Z'
          fill='#D9D9D9'
        />
        <path
          d='M18.386 0.0229492H4.61501H3.95501H0.0230103V9.20495V10.6709V11.4999H4.61501V10.6709V9.20495V4.61395H18.386V0.0229492Z'
          fill='#D9D9D9'
        />
        <rect
          x='4.61499'
          y='11.5'
          width='13.771'
          height='4.591'
          fill='#D9D9D9'
        />
      </svg>
    </div>
  )
}

export default Logo
