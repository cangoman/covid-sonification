import axios from 'axios';

export const login = (user) => {
	return axios
		.post('/login', {
			email: user.email,
			password: user.password,
		})
		.then((result) => {
			console.log('loginFunctions.js axios post result:', result);
			return result;
		})
		.catch((error) => console.log('error from loginFunction', error));
};
