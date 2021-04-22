import React, { Component, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter to use the match router prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Moment from 'react-moment'
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
    const { survey, deleted } = this.state
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
      <Fragment key={response.response}>
        <tr>
          <td>{response.response}</td>
          <td><Moment format='M/D/YY h:m a'>{response.createdAt}</Moment></td>
        </tr>
      </Fragment>
    ))
    return (
      <div className="row text-center container">
        <div className="col-sm-12 mx-auto">
          <div>
            <img src="logo-su-main.png" className="mx-auto d-block mt-4 mb-4"/>
          </div>
          <h2 className="text-center mt-3">{survey.title}</h2>
          <p className="text-center mb-5">{survey._id}</p>
          <h5 className="text-center mt-3 mb-4">{survey.question}</h5>
          <Link to={`/surveys/${survey._id}/edit`}>
            <Button className="mr-5 mb-4" variant="flat">
              Edit Survey
            </Button>
          </Link>
          <Button className="mb-4" variant="danger"onClick={this.handleDelete}>Delete Survey</Button>
          <Table striped bordered hover size="sm" width="150" className="text-center table">
            <thead>
              <tr>
                <th>Response</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {responseJsx}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}
export default withRouter(SurveyShow)
