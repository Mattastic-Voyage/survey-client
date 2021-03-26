// API code to manage survey participants
import apiUrl from '../apiConfig'
import axios from 'axios'

export const participantSignUp = info => {
  return axios({
    method: 'POST',
    url: apiUrl + '/participants',
    data: {
      participant: {
        name: info.name,
        hometown: info.hometown
      }
    }
  })
}
