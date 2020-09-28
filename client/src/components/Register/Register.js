import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

function Register() {
	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');

		const newUser = {
			first_name: state.first_name,
			last_name: state.last_name,
			email: state.email,
			password: state.password,
		};

		console.log('newUser:', newUser);
	};

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

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
