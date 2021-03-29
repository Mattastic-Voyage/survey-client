import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'
import SignOut from '../../components/SignOut/SignOut'
import ChangePassword from '../../components/ChangePassword/ChangePassword'
import TakeAsurvey from '../../components/TakeAsurvey/TakeAsurvey'
// import crud components
import SurveyResponse from '../../components/SurveyResponse/SurveyResponse'
// import crud components
import SurveyCreate from '../../components/routes/SurveyCreate'
import SurveyShow from '../../components/routes/SurveyShow'
import SurveyUpdate from '../../components/routes/SurveyUpdate'
import SurveyIndex from '../../components/routes/SurveyIndex'
import AuthenticatedRoute from '../../components/AuthenticatedRoute/AuthenticatedRoute'

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
        <Home />
        <Footer />
        <Route path='/sign-up' render={() => (
          <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
        )} />
        <Route path='/take-survey' render={() => (
          <TakeAsurvey msgAlert={this.msgAlert}/>
        )} />
        <Route exact path='/response/:surveyID/:participantID' render={() => (
          <SurveyResponse msgAlert={this.msgAlert}/>
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword msgAlert={this.msgAlert} user={user} />
        )} />
        {/* create a survey */}
        <AuthenticatedRoute user={user} path='/create-survey' render={() => (
          <SurveyCreate msgAlert={this.msgAlert} user={user} />
        )} />
        {/* Update the survey */}
        <AuthenticatedRoute user={user} exact path='/surveys/:id/edit' render={() => (
          <SurveyUpdate msgAlert={this.msgAlert} user={user} />
        )} />
        {/* Show the survey */}
        <AuthenticatedRoute user={user} exact path='/surveys/:id' render={() => (
          <SurveyShow msgAlert={this.msgAlert} user={user} />
        )} />
        {/* Show ALL surveys */}
        <AuthenticatedRoute user={user} exact path='/surveys' render={() => (
          <SurveyIndex msgAlert={this.msgAlert} user={user} />
        )} />
      </Fragment>
    )
  }
}

export default Layout
