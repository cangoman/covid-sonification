import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { login } from './LoginFunctions';

import './Login.scss';

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
				localStorage.setItem('email', result.data.email);
				history.push('/');
			})
			.catch((error) => console.log(error));
		// look for statuscode 404 -> render a ui error message
		// if statusCode === 404
		// error.response.status
	};

	const onChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='login-page'>
			<div className='login-page__form-card'>
				<h1>LOGIN</h1>
				<Form onSubmit={onSubmit}>
					<Form.Group controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							required
							type='email'
							name='email'
							placeholder='Email'
							value={state.email}
							onChange={onChange}
							autocomplete='off'
						/>
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							required
							type='password'
							name='password'
							placeholder='Password'
							value={state.password}
							onChange={onChange}
						/>
					</Form.Group>
					<Button variant='outline-light' type='submit' block>
						Log in
					</Button>
				</Form>
				<span>Listen to the sound of the world</span>
			</div>
		</div>
	);
}

export default Login;
