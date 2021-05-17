import React from 'react'
import SectionHeader from '../../SectionHeader'

type Props = {}

const Subscribe: React.FC<Props> = () => {
  const title = {
    en: 'Subscribe',
    zh: '订阅'
  }

  const description = {
    en:
      'Subscribe to the newsletter to hear about Phala Network updates and events.',
    zh: '订阅Phala Network邮件，获取最新消息和活动'
  }

  return (
    <SectionHeader
      color='gray'
      title={title}
      description={description}></SectionHeader>
  )
}

export default Subscribe
