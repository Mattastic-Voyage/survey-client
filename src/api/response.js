export const createResponse = (passwords, user) => {
  return axios({
    url: apiUrl + '/responses',
    method: 'POST',
    headers:,
    data: {
      rsponse: {
        response: response,
        surveyId: surveyId,
        participant: participantID
      }
    }
  })
}
