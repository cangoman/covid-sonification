import React, { useEffect, useState } from 'react';

import DashboardTitle from './DashboardTitle';
import DashboardCard from './DashboardCard';
import DashboardSideMenu from './DashboardSideMenu';

// import { getCompositions } from '../../helpers/CompositionsHelpers'
import useCompositions from '../../hooks/useCompositions';

import './UserDashboard.scss';

function UserDashboard() {
	// const [compositions, setCompositions] = useState([]);
	const { loaded, compositions } = useCompositions();

	useEffect(() => {
		console.log(compositions);
	}, [compositions, loaded]);

	//then map over them and make a cards component to show

	const compCards = compositions.map((element, index) => {
		console.log('element compCards', element);
		return (
			<DashboardCard
				key={index}
				title={element.title}
				createdOn={element.created_on}
				link={`/compositions/${element.id}`}
				startDate={element.state.dates.startDate}
				endDate={element.state.dates.endDate}
				interval={element.state.interval}
				countries={element.state.query}
			/>
		);
	});

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
					{compCards}
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
