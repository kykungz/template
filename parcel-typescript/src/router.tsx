import React from 'react'
import { Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
]

export const RouterView = () => (
  <>
    {routes.map((route, i) => (
      <Route key={i} exact {...route} />
    ))}
  </>
)
