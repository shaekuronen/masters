import React from 'react'
import Nav from './components/nav'

export default React.createClass({

  render () {
    return (
      <div>
        <Nav/>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})