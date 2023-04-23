// const util = require('util')
const fs = require('fs')
const fetch = require('node-fetch')
const path = require('path')
const R = require('ramda')

// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//   const config = getConfig()
//   console.log('=---=')

//   const pluginIsNotMiniCssExtractPlugin = (plugin) => {
//     const loaderTest = !plugin.loader?.includes('mini-css-extract-plugin')

//     if (!(loaderTest)) {
//       console.log({ loaderTest })
//       console.log(plugin)
//     }

//     return loaderTest
//   }

//   config.module.rules.forEach((rule) => {
//     rule.oneOf?.forEach((condition, conditionIndex) => {
//       rule.oneOf[conditionIndex].use = condition.use.filter(pluginIsNotMiniCssExtractPlugin)
//     })

//     if (rule.use) {
//       if (rule.use.filter) {
//         rule.use = rule.use.filter(pluginIsNotMiniCssExtractPlugin)
//       }

//       if (!pluginIsNotMiniCssExtractPlugin(rule.use)) {
//         delete rule.use
//       }
//     }
//   })

//   config.plugins = config.plugins.filter(
//     plugin => plugin.constructor.name !== 'MiniCssExtractPlugin'
//   )

//   actions.replaceWebpackConfig(config)
// }

const notionPostListEndpoint = process.env.NOTION_POST_LIST_ENDPOINT

async function createPages ({ actions }) {
  const result = await fetch(notionPostListEndpoint)
  const resultData = await result.json();
  // const content = fs.readFileSync('./data.json', { encoding: 'utf-8' })
  // const resultData = JSON.parse(content)

  const posts = resultData.filter(i => i.postType.name === 'Post')

  const latestPosts = posts.slice(0, 5)

  actions.createPage({
    path: '/blog',
    component: path.resolve('./src/components/Blog/Portal.tsx'),
    context: {
      data: posts
    }
  })

  // yearly archives
  const yearly = R.toPairs(R.groupBy(i => i.publishedTime.split('-')[0], posts))
  yearly.forEach(([year, posts]) => {
    actions.createPage({
      path: `/archives/${year}`,
      component: path.resolve('./src/components/Blog/Archive.tsx'),
      context: {
        posts,
        title: year
      }
    })
  })

  // monthly archives
  const monthly = R.toPairs(R.groupBy(i => i.publishedTime.split('-').slice(0, 2).join('/'), posts))
  monthly.forEach(([month, posts]) => {
    actions.createPage({
      path: `/archives/${month}`,
      component: path.resolve('./src/components/Blog/Archive.tsx'),
      context: {
        posts,
        title: month.replace('/', ' - ')
      }
    })
  })

  // tag archives
  const byTags = {}
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!byTags[tag.name]) {
        byTags[tag.name] = []
      }
      byTags[tag.name].push(post)
    })
  })
  R.toPairs(byTags).forEach(([tag, posts]) => {
    actions.createPage({
      path: `/tags/${tag}`,
      component: path.resolve('./src/components/Blog/Archive.tsx'),
      context: {
        posts,
        title: tag
      }
    })
  })

  posts.forEach((post, idx) => {
    const tagInclusivePosts = posts.filter(i => i.tags.some(tag => post.tags.map(i => i.name).includes(tag.name))).slice(0, 5)
    const relatedPosts = posts.filter(i => post.relatedPosts.some(j => j === i.id))
    actions.createPage({
      path: `/posts${post.url.split('?')[0]}`,
      component: path.resolve('./src/components/Blog/Post.tsx'),
      context: {
        post,
        prev: posts[idx - 1],
        next: posts[idx + 1],
        tagInclusivePosts,
        latestPosts,
        relatedPosts,
      }
    })
  })
}

exports.createPages = createPages
