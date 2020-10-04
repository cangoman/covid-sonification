const express = require('express');
const router = express.Router();

module.exports = ({ getUserId, saveComposition, getCompositionSettings, deleteComposition }) => {
    
  router.get('/:id', (req, res) => {
    getCompositionSettings(req.params.id)
      .then(response => {
        console.log(response)
        res.status(200).json(response)})
      .catch(err => console.log(err.stack))
  });

  router.post('/new', (req, res) => {
    // console.log("entering post request: ", req.body.state)
    getUserId(req.body.email)
    .then( response => {
      saveComposition(req.body.state, response.id)
        .then(response => {
          console.log(response.data)
          res.status(200).json(response.data)
        })
        .catch(err => console.log(err.stack))
    })
    .catch(error => console.log(error.stack))
  });

  router.delete('/:id', (req, res) => {
    deleteComposition(req.params.id)
    .then(response => {
      console.log(response)
      res.status(200).json(response)})
    .catch(err => console.log(err.stack))
  })

  





  return router;
}
