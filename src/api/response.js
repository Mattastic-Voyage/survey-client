import apiUrl from '../apiConfig'

import axios from 'axios'

export const createResponse = (info) => {
  return axios({
    url: apiUrl + '/responses',
    method: 'POST',
    data: {
      response: {
        response: info.response,
        surveyId: info.surveyId,
        participant: info.participantID
      }
    }
  })
}
