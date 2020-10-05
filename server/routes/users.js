const express = require('express');
const router = express.Router();
const { getPostsByUsers } = require('../helpers/dataHelpers');

module.exports = ({ getUsers, getUserId, getUserCompositions }) => {


  router.get('/:id/compositions', (req, res) => {
    getUserCompositions(req.params.id)
      .then( response => res.status(200).json(response))
      .catch((err) => res.json({ error: err.message }))
  });

  router.get('/:email', (req, res) => {
    console.log(req.params.email)
    getUserId(req.params.email)
      .then( response => res.status(200).json(response.id))
      .catch((err) => res.json({ error: err.message }))
  })


    /* GET users listing. */
    router.get('/', (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ error: err.message }));
    });

  router.post('/', (req, res) => {

    const {first_name, last_name, email, password} = req.body;

    getUserByEmail(email)
      .then(user => {

        if (user) {
          res.json({msg: 'Sorry, a user account with this email already exists'});
        } else {
          return addUser(first_name, last_name, email, password)
        }

      })
      .then(newUser => res.json(newUser))
      .catch(err => res.json({error: err.message}));

  })



  return router;
};