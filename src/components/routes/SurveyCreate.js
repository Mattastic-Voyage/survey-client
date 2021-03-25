import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { surveyCreate } from '../../api/survey.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class SurveyCreate extends Component {
  constructor(props) {
    super(props)

    // keyvalue pairs will be empty until they are filled in
    this.state = {
      survey: {
        title: '',
        question: ''
      },
      createdId: null
    }
  }
  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { survey } = this.state

    // create survey, pass it the survey data and the user for the token
    surveyCreate (survey, user)
    // set the createdId to the id of the survey that was just created
    .then(res => {
      this.setState({ createdId: res.data.survey._id })
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
}
export default SurveyCreate
