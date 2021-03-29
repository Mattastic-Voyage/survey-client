import React, { Component, Fragment } from 'react'
// import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  render (props) {
    const { user } = this.state
    return (
      <Fragment>
        <Header user={user} />
        <Home user={user} />
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
