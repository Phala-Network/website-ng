import { Text } from '../NotionBlock/Text'
import React from 'react'
import NormalLayout from '../NormalLayout'
import * as styles from './index.module.scss'

export default function BlogList({ pageContext }: any) {
  const data = pageContext.data

  return (
    <NormalLayout>
      <div className={styles.container}>
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
