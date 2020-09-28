module.exports = (db) => {
	const getUsers = () => {
		const query = {
			text: 'SELECT * FROM users',
		};

		return db
			.query(query)
			.then((result) => result.rows)
			.catch((err) => err);
	};

	const getTests = () => {
		const query = {
			text: 'SELECT * FROM tests',
		};

		return db
			.query(query)
			.then((result) => result.rows)
			.catch((err) => err);
	};

	const registerUser = (newUser) => {
		let query = {
			text:
				'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
		};

		return db
			.query(query, [
				newUser.first_name,
				newUser.last_name,
				newUser.email,
				newUser.password,
			])
			.then((result) => {
				console.log('server dbHelper result.rows:', result.rows);
				return result.rows[0];
			})
			.catch((err) => console.error('query error', err.stack));
	};

	return {
		getUsers,
		getTests,
		registerUser,
	};
};
