import apiUrl from '../apiConfig'

import axios from 'axios'

export const createResponse = (id, response) => {
  return axios({
    url: apiUrl + '/responses/' + id,
    method: 'POST',
    data: { response }
  })
}
