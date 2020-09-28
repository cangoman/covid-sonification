const express = require('express');
const router = express.Router();

module.exports = ({ loginUser }) => {
	// /login
	router.get('/', (req, res) => {
		res.send('login page');
	});

	router.post('/', (req, res) => {
		// console.log(req.body);
		const user = {
			email: req.body.email,
			password: req.body.password,
		};

		loginUser(user).then((result) => {
			res.status(201).json(result);
		});
	});

	return router;
};
