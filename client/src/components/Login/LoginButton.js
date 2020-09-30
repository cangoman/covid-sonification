import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton() {
	return (
		<Button href='/login' variant='outline-light' className='px-4'>
			Login
		</Button>
	);
}

export default LoginButton;
