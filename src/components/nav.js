import React from 'react'
import localLinks from 'local-links'
import app from 'ampersand-app'

export default React.createClass({
  onClick (event) {
    const pathname = localLinks.getLocalPathname(event)
    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },
  render () {
    return (
      <nav className='top-nav top-nav-light cf' role='navigation' onClick={this.onClick}>
        <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
        <label htmlFor='menu-toggle'>Menu</label>
        <ul className='list-unstyled list-inline cf'>
          <li>Labelr</li>
          <li><a href='http://google.com'>Google</a></li>
          <li><a href='/test'>Test</a></li>
          <li><a href='/repos'>Repos</a></li>
          <li className='pull-right'><a href='/logout'>Logout</a></li>
        </ul>
      </nav>
    )
  }
})