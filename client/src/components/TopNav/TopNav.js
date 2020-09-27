import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import VolumeSlider from './VolumeSlider'

import './TopNav.css'
import LoginMenu from './LoginMenu';

function TopNav() {
	return (
		<Navbar className="top-nav" bg='dark' variant='dark' expand='lg'>
			<Navbar.Brand href='#home'>Covid-Sonification</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>Link</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Nav>
				<VolumeSlider />
				<LoginMenu/>
			</Nav>
		</Navbar>
	);
}

export default TopNav;
