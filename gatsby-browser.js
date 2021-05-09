import * as React from 'react'
import App from './src/pages/_app'

export function wrapPageElement ({ element, props }) {
  return <App {...props}>{element}</App>
}
