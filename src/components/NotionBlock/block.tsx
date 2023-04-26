import { Text } from './Text'
import React, { Fragment } from 'react'
import styles from './block.scss'

export const renderBlock = (block: any) => {
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      )
    case 'heading_1':
      return (
        <h2 className="heading-lg">
          <Text text={value.rich_text} />
        </h2>
      )
    case 'heading_2':
      return (
        <h3 className="heading-md">
          <Text text={value.rich_text} />
        </h3>
      )
    case 'heading_3':
      return (
        <h4 className="heading-sm">
          <Text text={value.rich_text} />
        </h4>
      )
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      )
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      )
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      )
    case 'child_page':
      return <p>{value.title}</p>
    case 'embed':
      return (
        <embed
          type="text/html"
          src={block.embed.url}
          width="100%"
          height="200"
        />
      )
    case 'image':
      return (
        <figure>
          <img
            src={
              value.type === 'external' ? value.external.url : value.file.url
            }
            alt={value.caption ? value.caption[0]?.plain_text : ''}
            style={{ maxWidth: '100%', verticalAlign: 'middle' }}
          />
          {value.caption
            ? (
            <figcaption>
              {value.caption ? value.caption[0]?.plain_text : ''}
            </figcaption>
              )
            : null}
        </figure>
      )
    case 'divider':
      return <hr key={id} />
    case 'quote':
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>
    case 'code':
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      )
    case 'link_preview':
      return (
        <a
          href={block.link_preview.url}
          target="_blank"
          rel="noopener noreferrer">
          {block.link_preview.url}
        </a>
      )
    case 'file':
      return renderFile(value)

    case 'bookmark':
      return (
        <a href={value.url} target="_brank" className={styles.bookmark}>
          {value.url}
        </a>
      )
    default:
      // return `❌ Unsupported block (${
      //   type === "unsupported" ? "unsupported by Notion API" : type
      // })`;
      return <div style={{ color: 'red' }}>unsupported block type</div>
    // return <Alert className="mb-[10px]">unsupported block type</Alert>
  }
}

const renderNestedList = (block: any) => {
  const { type } = block
  const value = block[type]
  if (!value) return null

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return <ol>{value.children.map((block: any) => renderBlock(block))}</ol>
  }
  return <ul>{value.children.map((block: any) => renderBlock(block))}</ul>
}

function renderFile (value: any) {
  const srcFile =
    value.type === 'external' ? value.external.url : value.file.url
  const splitSourceArray = srcFile.split('/')
  const lastElementInArray = splitSourceArray[splitSourceArray.length - 1]
  const captionFile = value.caption ? value.caption[0]?.plain_text : ''
  return (
    <figure>
      <div className={styles.file}>
        📎 <a href={srcFile}>{lastElementInArray.split('?')[0]}</a>
      </div>
      {captionFile && <figcaption>{captionFile}</figcaption>}
    </figure>
  )
}
