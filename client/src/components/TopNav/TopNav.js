import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import VolumeSlider from './VolumeSlider';
import LoginMenu from './LoginMenu';

import './TopNav.css';

function TopNav() {
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
					<Button href='/login' variant='outline-light'>
						Login
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default TopNav;
