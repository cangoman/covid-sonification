import React from 'react';

import './DashboardCard.scss';

function DashboardCard(props) {
	console.log(props.state)
	
	return (
		<div className='dashboard-card__container'>
			<div className='dashboard-card__title'>
				<h1>Composition</h1>
			</div>
			<div className='dashboard-card__table'>
				<div className='dashboard-card__table--row'>
					<div className='dashboard-card__table--row-left row-header'>
						Title
					</div>
					<div className='dashboard-card__table--row-right row-header'>
						Created On
					</div>
				</div>
				<div className='dashboard-card__table--row'>
					<a href={props.link} className='dashboard-card__table--row-left'>{props.title}</a>
					<div className='dashboard-card__table--row-right'>{props.createdOn.substr(0,10)}</div>
				</div>

			</div>
		</div>
	);
}

export default DashboardCard;
