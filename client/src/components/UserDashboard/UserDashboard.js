import React, { useEffect, useState } from 'react';

import DashboardTitle from './DashboardTitle';
import DashboardCard from './DashboardCard';
import DashboardSideMenu from './DashboardSideMenu';

// import { getCompositions } from '../../helpers/CompositionsHelpers'
import useCompositions from '../../hooks/useCompositions'

import './UserDashboard.scss';

function UserDashboard() {
	// const [compositions, setCompositions] = useState([]);
	const { compositions } = useCompositions();
	
	useEffect(() => {
		console.log(compositions)
	}, [compositions])

	//then map over them and make a cards component to show
	
	
	
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
					{/* <DashboardCard /> */}
					{/* {compositions} */}
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
