import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createResponse } from '../../api/response'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SurveyResponse extends Component {
  constructor (props) {
    super(props)

    this.state = {
      response: '',
      surveyId: '',
      participantID: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onResponse = event => {
    event.preventDefault()
    // Not sure what we should do with 'setUser' below? *********************
    // const { msgAlert, history, setUser } = this.props
    const { msgAlert, history } = this.props

    createResponse(this.state)

      .then(() => msgAlert({
        heading: 'Your Survey Response Was Recorded',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ response: '', participantID: '', surveyId: '' })
        msgAlert({
          heading: 'Survey Response Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    // const { response, participantID, surveyId } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Participant Sign In</h3>
          <Form onSubmit={this.onResponse}>
            <Form.Group controlId="question">
              <Form.Label>Display Question Here</Form.Label>
            </Form.Group>
            <Form.Group controlId="response">
              <Form.Label>Please Rate 1-5 (5=Best 1=Worst)</Form.Label>
              <Form.Check
                type='number'
                inline
                id='1'
                label='1'
              />
              <Form.Check
                type='number'
                inline
                id='2'
                label='2'
              />
              <Form.Check
                type='number'
                inline
                id='3'
                label='3'
              />
              <Form.Check
                type='number'
                inline
                id='4'
                label='4'
              />
              <Form.Check
                type='number'
                inline
                id='5'
                label='5'
              />
              <Button variant="primary" type="submit">Submit</Button>
            </Form.Group>
          </Form>

        </div>
      </div>
    )
  }
}

export default withRouter(SurveyResponse)
