const express = require('express');
const router = express.Router();

module.exports = ({ getUserId, saveComposition }) => {
    
  router.post('/', (req, res) => {
    // console.log("entering post request: ", req.body.state)
    getUserId(req.body.email)
    .then( response => {
      saveComposition(req.body.state, response.id)
        .then(response => res.status(200).json(response.data))
        .catch(err => console.log(err.stack))
    })
    .catch(error => console.log(error.stack))

  })

  return router;
}
