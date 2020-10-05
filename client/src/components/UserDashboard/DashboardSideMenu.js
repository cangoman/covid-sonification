import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';
import { faCog, faSlidersH } from '@fortawesome/free-solid-svg-icons';

import './DashboardSideMenu.scss';

function DashboardSideMenu() {
	return (
		<div className='dashboard-side-menu__container'>
			<FontAwesomeIcon icon={faUser} />
			<FontAwesomeIcon icon={faSlidersH} />
			<FontAwesomeIcon icon={faBell} />
			<FontAwesomeIcon icon={faCog} />
		</div>
	);
}

export default DashboardSideMenu;
