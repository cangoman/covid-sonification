import axios from 'axios'

export const saveState = (state) => {
  const email = localStorage.getItem('email')
  if (email) {
      return axios
        .post('/compositions', {
          state,
          email
        })
        .then((result) => result )
        .catch((error) => console.log('error from saveStateHelpers ', error))
      }
}
