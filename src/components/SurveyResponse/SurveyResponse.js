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
      response: {
        response: ''
      },
      surveyId: null,
      participantID: null
    }
  }
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = (event) => {
    event.preventDefault()
    // Not sure what we should do with 'setUser' below? *********************
    // const { msgAlert, history, setUser } = this.props
    const { msgAlert, match } = this.props
    const { response } = this.state

    createResponse(match.params.id, response)

      .then(() => msgAlert({
        heading: 'Your Survey Response Was Recorded',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      // .then(() => history.push('/'))
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
          <h3>Participant Response</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="question">
              <Form.Label>Display Question Here</Form.Label>
            </Form.Group>
            <div>
              <Form.Group controlId="response">
                <Form.Label>Response 1-5</Form.Label>
                <Form.Control
                  required
                  type="response"
                  name="response"
                  value={this.state.response}
                  placeholder="Enter 1-5"
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
