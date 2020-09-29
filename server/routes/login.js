const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

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

		loginUser(user)
			.then((result) => {
				if (bcrypt.compareSync(user.password, result.password)) {
					res.status(200).json({ email: result.email });
				} else {
					res.status(400).send('password is wrong');
				}
			})
			.catch(() => res.status(404).send('user/password error'));
	});

	return router;
};
