import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter to use the match router prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { surveyShow, surveyDelete } from '../../api/survey'

class SurveyShow extends Component {
  constructor (props) {
    super(props)

    // data will be null until fetch from api
    this.state = {
      survey: {
        title: '',
        question: '',
        responses: [],
        participants: []
      },
      deleted: false
    }
  }
  componentDidMount () {
    const { match, msgAlert } = this.props

    // make a request for a survey
    surveyShow(match.params.id)
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
  handleDelete = event => {
    // call for props
    const { user, msgAlert, match } = this.props
    // make a fetch request for deleted
    surveyDelete(match.params.id, user)
    // set deleted var to true, and redirect to the homepage
      .then(() => this.setState({ deleted: true }))
      .then(res => msgAlert({
        heading: 'Deleted Survey Succesfully',
        message: 'Survey has been Deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Delete Survey',
          message: 'Could not delete survey with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { survey, title, deleted } = this.state
    // console.log('response data is: ', survey.responses)
    // if we don't have survey
    if (!survey) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    if (deleted) {
      // redirect to the homepage
      return <Redirect to="/" />
    }
    const responseJsx = survey.responses.map(response => (
      // // console.log('this is the response data: ', response.response)
      <div key={response.response}>
        <li>{response.response}</li>
      </div>
    ))
    return (
      <div>
        <h3>{title}</h3>
        <h4>Question: {survey.question}</h4>
        <h4>SurveyID: {survey._id}</h4>
        <h4>Response: {responseJsx} </h4>
        <Button onClick={this.handleDelete}>Delete Survey</Button>
        <Link to={`/surveys/${survey._id}/edit`}>
          <Button renderAs='button'>
            Edit Survey
          </Button>
        </Link>
      </div>
    )
  }
}
export default withRouter(SurveyShow)
