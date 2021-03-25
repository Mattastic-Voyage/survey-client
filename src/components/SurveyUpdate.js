import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { surveyUpdate } from '../../api/survey'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

class SurveyUpdate extends Component {
  constructor () {
    super()

    this.state = {
      survey: null,
      updated: false
    }
  }

  componentDidMount () {
// Add Eric's code from show

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { survey } = this.state

    surveyUpdate(match.params.id, survey, user)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Updated Survey Successfully',
          variant: 'success',
          message: 'Survey has been updated.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Updating Survey Failed',
          variant: 'danger',
          message: 'Survey was not updated due to error: ' + err.message
        })
      })
  }

  // same handleChange from SurveyCreate
  handleChange = event => {
    this.setState({ survey: { ...this.state.survey, [event.target.name]: event.target.value } })
  }

  render () {
    const { survey, updated } = this.state

    // if we don't have a survey yet
    if (!survey) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the survey is deleted
    if (updated) {
      // redirect to the surveys index page
      return <Redirect to={`/surveys/${this.props.match.params.id}`} />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Edit Survey</h2>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={title}
            placeholder="Enter New Title"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control
            required
            name="question"
            value={question}
            type="text"
            placeholder="Enter New Question"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
        Submit</Button>
      </Form>
    )
  }
}

export default SurveyUpdate
