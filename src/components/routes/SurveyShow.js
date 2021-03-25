import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter to use the match router prop
import { withRouter } from 'react-router-dom'
import { surveyShow } from '../../api/survey'

class SurveyShow extends Component {
  constructor (props) {
    super(props)

    // data will be null until fetch from api
    this.state = {
      survey: null
    }
  }
  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a survey
    surveyShow(match.params.id, user)
    // set the survey state to the data that return from api call
      .then(res => this.setState({ survey: res.data.survey }))
      .then(() => msgAlert({
        heading: 'Survey Fetched Succesfully',
        message: 'Survey is being viewed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Survey Failed',
          message: 'Failed to show survey with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { survey } = this.state
    // if we don't have survey
    if (!survey) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    return (
      <div>
        <h3>{survey.title}</h3>
        <h4>Question: {survey.question}</h4>
        <h4>SurveyID: {survey._id}</h4>
      </div>
    )
  }
}
export default withRouter(SurveyShow)
