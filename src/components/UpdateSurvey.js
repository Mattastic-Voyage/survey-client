import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class UpdateSurvey extends Component {
  constructor (props) {
    super(props)

    this.state = {
      survey: {
        title: '',
        question: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/surveys/${this.props.match.params.id}`)
      .then(res => this.setState({ survey: res.data.survey }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const updatedSurvey = Object.assign(this.state.survey, updatedField)

    this.setState({ survey: updatedSurvey })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/surveys/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { survey: this.state.survey }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { survey, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/surveys/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <BookForm
          book={survey}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/surveys/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
}

export default UpdateSurvey
