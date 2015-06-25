import Router from './router'
import styles from './styles/main.styl'
import app from 'ampersand-app'
import User from './models/user'

app.extend({
  init () {
    this.user = new User()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()