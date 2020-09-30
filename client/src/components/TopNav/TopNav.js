import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


import LoginButton from '../Login/LoginButton';
import RegisterButton from '../Register/RegisterButton';
import LogoutButton from '../Login/LogoutButton';

import './TopNav.scss';

function TopNav() {
	const location = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('email'));

	useEffect(() => {
		let user = localStorage.getItem('email');
		console.log('user from useEffect', user);
		if (user) setIsLoggedIn(true);
	}, [location]);

	return (
		<Navbar
			className='top-nav'
			bg='dark'
			variant='dark'
			expand='lg'
			fixed='top'
		>
			<Navbar.Brand href='/'>Covid-Sonification</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>Link</Nav.Link>
				</Nav>
				<Nav>
					{!isLoggedIn && <LoginButton />}
					{!isLoggedIn && <RegisterButton />}
					{isLoggedIn && <LogoutButton />}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default TopNav;
