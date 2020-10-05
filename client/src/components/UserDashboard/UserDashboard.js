import React from 'react';

import DashboardTitle from './DashboardTitle';
import DashboardCard from './DashboardCard';
import DashboardSideMenu from './DashboardSideMenu';

import './UserDashboard.scss';

function UserDashboard() {
	return (
		<div className='user-dashboard__container'>
			<div className='user-dashboard__title'>
				<DashboardTitle />
			</div>
			<div className='user-dashboard__body'>
				<div className='user-dashboard__body-left'>
					<DashboardSideMenu />
				</div>
				<div className='user-dashboard__body-right'>
					<DashboardCard />
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
