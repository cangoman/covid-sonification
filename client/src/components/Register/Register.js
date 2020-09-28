import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { register } from './UserFunctions';

function Register() {
	const history = useHistory();
	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			first_name: state.first_name,
			last_name: state.last_name,
			email: state.email,
			password: state.password,
		};

		register(newUser)
			.then((result) => {
				console.log('client side register.js result:', result);
				localStorage.setItem('username', result.data.first_name);
				history.push('/');
			})
			.catch((error) => console.log(error));
	};

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	// local storage for log in authentication -> token :

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group controlId='first_name'>
				<Form.Label>First name</Form.Label>
				<Form.Control
					type='text'
					name='first_name'
					placeholder='Enter First name'
					value={state.first_name}
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group controlId='last_name'>
				<Form.Label>Last name</Form.Label>
				<Form.Control
					type='text'
					name='last_name'
					placeholder='Enter Last name'
					value={state.last_name}
					onChange={onChange}
				/>
			</Form.Group>

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

export default Register;
