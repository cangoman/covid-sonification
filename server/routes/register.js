const express = require('express');
const router = express.Router();

module.exports = ({ getTests, registerUser }) => {
	// /register
	router.get('/', (req, res) => {
		getTests()
			.then((tests) => res.json(tests))
			.catch((err) => res.json({ error: err.message }));
	});

	router.post('/', (req, res) => {
		// console.log(req.body);

		const newUser = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: req.body.password,
		};

		registerUser(newUser).then((result) => {
			console.log('server register.js result', result);
			res.status(201).json(result);
		});

		// console.log('newUser:', newUser);
	});

	return router;
};
