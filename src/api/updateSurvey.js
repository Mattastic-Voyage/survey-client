import apiUrl from '../apiConfig'

import axios from 'axios'

export const surveyUpdate = (id, survey, user) => {
  return axios({
    url: apiUrl + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      survey: {
        title: survey.title,
        question: survey.question
      }
    }
  })
}

export const surveyShow = (id, user) => {
  return axios({
    url: apiUrl + '/surveys/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
