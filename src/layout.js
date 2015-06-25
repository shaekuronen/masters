import React from 'react'
import Nav from './components/nav'
import ampersandMixins from 'ampersand-react-mixin'

export default React.createClass({

  // this is here to force layout re-render whenever the model updates
  mixins: [ampersandMixins],

  render () {
    // es2015 destructure props to get local reference to user
    const {user} = this.props
    return (
      <div>
        <Nav user={user} />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})