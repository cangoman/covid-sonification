import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import VolumeSlider from './VolumeSlider';

import './TopNav.css';

function TopNav() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		let user = localStorage.getItem('username');
		console.log('user from useEffect', user);

		if (user) setIsLoggedIn(true);
	}, []);

	return (
		<Navbar className='top-nav' bg='dark' variant='dark' expand='lg'>
			<Navbar.Brand href='#home'>Covid-Sonification</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>Link</Nav.Link>
				</Nav>
				<Nav>
					<VolumeSlider />
					{!isLoggedIn && (
						<Button href='/login' variant='outline-light'>
							Login
						</Button>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default TopNav;
