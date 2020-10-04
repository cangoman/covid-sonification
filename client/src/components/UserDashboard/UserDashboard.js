import React from 'react';

import DashboardTitle from './DashboardTitle';
import DashboardCard from './DashboardCard';

import './UserDashboard.scss';

function UserDashboard() {
	return (
		<div className='user-dashboard__container'>
			<div className='user-dashboard__title'>
				<DashboardTitle />
			</div>
			<div className='user-dashboard__body'>
				<DashboardCard />
			</div>
		</div>
	);
}

export default UserDashboard;
