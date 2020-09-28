import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { login } from './LoginFunctions';

function Login() {
	const history = useHistory();
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const user = {
			email: state.email,
			password: state.password,
		};

		login(user)
			.then((result) => {
				console.log('login.js result:', result);
				history.push('/');
			})
			.catch((error) => console.log(error));
	};

	const onChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group controlId='email'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					name='email'
					placeholder='Enter email'
					value={state.email}
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group controlId='password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					name='password'
					placeholder='Password'
					value={state.password}
					onChange={onChange}
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
}

export default Login;
