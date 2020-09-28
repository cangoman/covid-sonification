const express = require('express');
const router = express.Router();

module.exports = (db) => {
	// /register
	router.get('/', function (req, res) {
		res.render('index', { title: 'Register' });
	});

	return router;
};
