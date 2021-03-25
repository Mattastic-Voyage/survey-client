import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { participantSignUp } from '../../api/participant'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TakeAsurvey extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      hometown: '',
      surveyId: '',
      participantID: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onTakeSurvey = event => {
    event.preventDefault()
    // Not sure what we should do with 'setUser' below? *********************
    // const { msgAlert, history, setUser } = this.props
    const { msgAlert, history } = this.props

    participantSignUp(this.state)
      .then((res) => {
        // console.log(res)
        this.setState({ participantID: res.data.participant._id })
        // console.log(this.state.participantID)
      })

      .then(() => msgAlert({
        heading: 'Participant Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ name: '', hometown: '', surveyId: '' })
        msgAlert({
          heading: 'Participant Sign Up Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, hometown, surveyId } = this.state
    if (this.state.participantID) {
      return <Redirect to={`/response/${this.state.surveyId}/${this.state.participantID}`} />
    }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Participant Sign In</h3>
          <Form onSubmit={this.onTakeSurvey}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="hometown">
              <Form.Label>Hometown</Form.Label>
              <Form.Control
                required
                name="hometown"
                value={hometown}
                type="hometown"
                placeholder="Hometown"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="surveyId">
              <Form.Label>Survey ID</Form.Label>
              <Form.Control
                required
                name="surveyId"
                value={surveyId}
                type="surveyId"
                placeholder="Survey ID"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>

        </div>
      </div>
    )
  }
}

export default withRouter(TakeAsurvey)
