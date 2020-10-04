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

	const getUserId = (email) => {
		let query = {
			text: 'SELECT id FROM users WHERE email = $1'
		}
		return db
			.query(query, [email])
			.then((result) => result.rows[0])
			.catch((err) => console.error(err.stack));
	}

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
				// console.log('server dbHelper result.rows:', result.rows);
				return result.rows[0];
			})
			.catch((err) => console.error('query error', err.stack));
	};

	const loginUser = (user) => {
		let query = {
			text: 'SELECT * FROM users WHERE email = $1',
		};
		return db
			.query(query, [user.email])
			.then((result) => result.rows[0])
			.catch((err) => console.error(err.stack));
	};

	const saveComposition = (composition, user_id) => {
		let  query = {
			text: 'INSERT INTO compositions (state, created_on, user_id) VALUES ($1, NOW(), $2) returning *'
		}
		return db
			.query(query, [
				composition,
				user_id
			])
			.then((result) => result.rows[0])
			.catch((err) => console.error(err.stack));
	}

	const getCompositionSettings = (composition_id) => {
		let query = {
			text: 'SELECT * FROM compositions WHERE id = $1'
		}

		return db
			.query(query,[
				composition_id
				])
			.then((result) => result.rows[0])
			.catch((err) => console.error(err.stack));
	}

	const deleteComposition = (composition_id) => {
		let query = {
			text: 'DELETE FROM compositions WHERE id = $1 returning *'
		}

		return db
			.query(query, [
				composition_id
			])
			.then((result) => result.rows[0])
			.catch((err) => console.error(err.stack));
	}

	return {
		getUsers,
		getTests,
		registerUser,
		loginUser,
		saveComposition,
		getCompositionSettings,
		deleteComposition,
		getUserId,
	};
};
