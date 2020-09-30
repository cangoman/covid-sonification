import React from 'react';
import { Form, Button } from 'react-bootstrap';

function LogoutButton() {
	const onSubmit = (e) => {
		localStorage.removeItem('email');
	};

	return (
		<Form onSubmit={onSubmit}>
			<Button variant='outline-light' type='submit' className='px-4'>
				Log out
			</Button>
		</Form>
	);
}

export default LogoutButton;
