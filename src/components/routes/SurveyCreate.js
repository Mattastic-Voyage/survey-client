import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { surveyCreate } from '../../api/survey.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'

class SurveyCreate extends Component {
  constructor (props) {
    super(props)

    // keyvalue pairs will be empty until they are filled in
    this.state = {
      survey: {
        title: '',
        question: ''
      },
      surveyId: null
    }
  }
  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { survey } = this.state

    // create survey, pass it the survey data and the user for the token
    surveyCreate(survey, user)
    // set the createdId to the id of the survey that was just created
      .then(res => {
        this.setState({ surveyId: res.data.survey._id })
        // pass the response to the .then so we can show survey title
        return res
      })
      .then(res => msgAlert({
        heading: 'Created Survey Succesfully',
        message: `Survey has been created successfully. The Survey ${res.data.survey.title}`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Survey',
          message: 'Could not create survey with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  // when an input changes, update the state that corresponds with input's name
  handleChange = event => {
    // using event.persist to ensure props are not set to null
    event.persist()

    this.setState(state => {
    // return the state change
      return {
      // set the survey state to what it used to be(..state.survey)
      // but replace the prop with `name` to its cureent `value`
      // name could be title or question
        survey: { ...state.survey, [event.target.name]: event.target.value }
      }
    })
  }
  render () {
    // destructure survey and createId state
    const { title, question, surveyId } = this.state
    // if the survey been created, set its id
    if (surveyId) {
      // redirect to the survey show page, (show page finish will add correct endpoint)
      return <Redirect to={`/surveys/${surveyId}`} />
    }
    return (
      <Form>
        <h2>Make a Survey</h2>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={title}
            placeholder="Enter title"
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
            placeholder="Enter your question"
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
export default SurveyCreate
