import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createResponse } from '../../api/response'
import { surveyShow } from '../../api/survey'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SurveyResponse extends Component {
  constructor (props) {
    // console.log(props)
    super(props)
    const { match } = this.props
    // const surveyQuestion
    this.state = {
      response: {
        response: '',
        surveyId: match.params.surveyID,
        participantID: match.params.participantID
      },
      question: ''
    }
    surveyShow(match.params.surveyID)
      .then(response => {
        this.setState({ question: response.data.survey.question })
        console.log('survey question is: ', response.data.survey.question)
      })
  }
  handleChange = event => {
    event.persist()

    this.setState(state => {
      // return our state change
      return {
        // set the response state to what it used to be
        response: { ...state.response, [event.target.name]: event.target.value }
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // Not sure what we should do with 'setUser' below? *********************
    // const { msgAlert, history, setUser } = this.props
    const { msgAlert } = this.props
    const { response } = this.state

    createResponse(response)

      .then(() => msgAlert({
        heading: 'Your Survey Response Was Recorded',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      // .then(() => history.push('/'))
      .catch(() => {
        this.setState({ response: '', participantID: '', surveyId: '' })
        msgAlert({
          heading: 'Error',
          message: 'Please keep answer between 1-5',
          variant: 'danger'
        })
      })
  }

  render () {
    const { response, question } = this.state
    console.log(response)
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Participant Response</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="question">
              <Form.Label>{question}</Form.Label>
            </Form.Group>
            <div>
              <Form.Group controlId="response">
                <Form.Label>Response 1-5</Form.Label>
                <Form.Control
                  required
                  type="response"
                  name="response"
                  placeholder="Enter 1-5"
                  value={response.response}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </div>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(SurveyResponse)
