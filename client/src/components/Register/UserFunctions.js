import axios from 'axios';

export const register = (newUser) => {
	return axios
		.post('/register', {
			first_name: newUser.first_name,
			last_name: newUser.last_name,
			email: newUser.email,
			password: newUser.password,
		})
		.then((response) => {
			console.log('newUser axios post response', response);
		})
		.catch((error) => console.log(error));
};
