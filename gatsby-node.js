// const util = require('util')
// const fs = require('fs')
const fetch = require('node-fetch')
const path = require('path')

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

exports.createPages = async ({ actions }) => {
  const result = await fetch(notionPostListEndpoint)
  const resultData = await result.json();

  actions.createPage({
    path: '/blog',
    component: path.resolve('./src/components/BlogList/index.tsx'),
    context: {
      data: resultData.filter(i => i.postType.name === 'Post').reverse()
    }
  })

  resultData.filter(i => i.postType.name === 'Post').forEach((r) => {
    actions.createPage({
      path: `/blog${r.url.split('?')[0]}`,
      component: path.resolve('./src/components/Blog/index.tsx'),
      context: {
        data: r
      }
    })
  })
}
