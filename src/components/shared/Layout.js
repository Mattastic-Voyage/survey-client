import React, { Component, Fragment } from 'react'
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
        <h1>SurveyUs</h1>
        <Header user={user} />
        <Home />
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
