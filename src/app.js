import Router from './router'
import styles from './styles/main.styl'
import app from 'ampersand-app'
import User from './models/user'

// allows easier debugging
window.app = app

app.extend({
  init () {
    this.user = new User()
    this.user.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()