import Router from 'ampersand-router'
import React from 'react'
import Home from './pages/home'
import Repos from './pages/repos'
import Layout from './layout'
import qs from 'qs'
import xhr from 'xhr'
import app from 'ampersand-app'

export default Router.extend({

  routes: {
    ''                     : 'home',
    'repos'                : 'repos',
    'login'                : 'login',
    'logout'               : 'logout',
    'auth/callback?:query' : 'authCallback'
  },

  renderPage (page, opts = {layout: true}) {
    if (opts.layout ) {
      page = (
        <Layout user={app.user}>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body)
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: 'f8dd69187841cdd22a26',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo'
    })
  },

  authCallback (query) {
    query = qs.parse(query)
    xhr({
      url: 'http://labelr-dev.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
      console.log(body)
      app.user.token = body.token
      this.redirectTo('/repos')
    })
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  home () {
    this.renderPage(<Home/>, {layout: false})
  },

  repos () {
    this.renderPage(<Repos/>)
  }

})