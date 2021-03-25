import apiUrl from '../apiConfig'

import axios from 'axios'

export const createResponse = (info, id) => {
  return axios({
    url: apiUrl + '/responses/' + id,
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
