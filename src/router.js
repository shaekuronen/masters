import Router from 'ampersand-router'
import React from 'react'
import Home from './pages/home'
import Repos from './pages/repos'
import Layout from './layout'

export default Router.extend({

  routes: {
    ''      : 'home',
    'repos' : 'repos'
  },

  renderPage (page, opts = {layout: true}) {
    if (opts.layout ) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body)
  },

  home () {
    this.renderPage(<Home/>, {layout: false})
  },

  repos () {
    this.renderPage(<Repos/>)
  }

})