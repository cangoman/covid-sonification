import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function LoginButton() {
	return (
		<Button href='/login' variant='outline-light'>
			Login
		</Button>
	);
}

export default LoginButton;
