import apiUrl from '../apiConfig'

import axios from 'axios'

export const createResponse = (response) => {
  return axios({
    url: apiUrl + '/responses',
    method: 'POST',
    data: { response }
  })
}
