import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { register } from './RegisterFunctions';

import './Register.scss';

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
				localStorage.setItem('email', result.data.email);
				history.push('/');
			})
			.catch((error) => console.log(error));
	};

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	// local storage for log in authentication -> token :

	return (
		<div className='register-page'>
			<div className='register-page__form-card'>
				<h1>REGISTER</h1>
				<Form onSubmit={onSubmit}>
					<Form.Group controlId='first_name'>
						<Form.Label>First name</Form.Label>
						<Form.Control
							required
							type='text'
							name='first_name'
							placeholder='First name'
							value={state.first_name}
							onChange={onChange}
							autoComplete='no'
						/>
					</Form.Group>

					<Form.Group controlId='last_name'>
						<Form.Label>Last name</Form.Label>
						<Form.Control
							required
							type='text'
							name='last_name'
							placeholder='Last name'
							value={state.last_name}
							onChange={onChange}
							autoComplete='no'
						/>
					</Form.Group>

					<Form.Group controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							required
							type='email'
							name='email'
							placeholder='Email'
							value={state.email}
							onChange={onChange}
							autoComplete='off'
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
						Register
					</Button>
				</Form>
				<span>Listen to the sound of the world</span>
			</div>
		</div>
	);
}

export default Register;
