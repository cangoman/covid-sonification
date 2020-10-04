import axios from 'axios'

export const saveState = (state, title) => {
  console.log("(FE) save dis 4 me pls: ", state, title)
  const email = localStorage.getItem('email')
  if (email) {
      return axios
        .post('/compositions/new', {
          state,
          email, 
          title
        })
        .then((result) => result)
        .catch((error) => console.log('error from saveStateHelpers ', error))
      }
    else{
      console.log('User not logged in, shouldn\'t save')
    }
}

export const loadState = (state_id) => {
  console.log("load me dat state with id ", state_id)
  return axios({
    method: 'GET',
    url: `/compositions/${state_id}`
  })
  .then((result) => result.data.state)
  .catch((error) => console.log('error from loadState helper ', error))
}
