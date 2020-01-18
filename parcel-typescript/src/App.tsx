import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'
import { RouterView } from './router'

const basename =
  process.env.NODE_ENV === 'production' ? '/github-report-generator/' : '/'

const App = () => {
  return (
    <Router basename={basename}>
      <GlobalStyle />
      <RouterView />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
