import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { surveyIndex } from '../../api/survey'

class SurveyIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      surveys: null
    }
  }

  // after we render the SurveyIndex component for the first time
  componentDidMount () {
    const { msgAlert, user } = this.props

    // make a request to get all of our surveys
    surveyIndex(user)
      // set the surveys state, to the surveys we got back in the response's data
      .then(res => this.setState({ surveys: res.data.surveys }))
      .then(() => msgAlert({
        heading: 'Loaded Surveys Successfully',
        message: 'All surveys retrieved. Click on one to go to its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Surveys!',
          message: 'Could not load surveys with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    // destructure our surveys state
    const { surveys } = this.state

    // if we haven't fetched any surveys yet from the API
    if (!surveys) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const surveysJsx = surveys.map(survey => (
      <Link to={`/surveys/${survey._id}`} key={survey._id}>
        <li>
          {survey.title}
        </li>
      </Link>
    ))

    return (
      <div>
        <h3>Surveys</h3>
        <ul>
          {surveysJsx}
        </ul>
      </div>
    )
  }
}

export default SurveyIndex
