import axios from 'axios'

export const getCompositions = async (email) => {
  if (email) {
    const id = await getUserId(email);

    return axios({
      method: 'GET',
      url: `/api/users/${id}/compositions`
    })
    .then(response => response.data)
    .catch((error) => console.log('error from getCompositions helper ', error))
  }
}

const getUserId = (email) => {
  return axios({
    method: 'GET',
    url: `/api/users/${email}`
  })
  .then(result => result.data)
  .catch((error) => console.log('error from getCompositions helper ', error))
}