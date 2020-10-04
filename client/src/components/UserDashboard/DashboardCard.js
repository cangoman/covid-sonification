import React from 'react';

import './DashboardCard.scss';

function DashboardCard() {
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
					<div className='dashboard-card__table--row-left'>Symphony #19</div>
					<div className='dashboard-card__table--row-right'>Oct 4-20</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardCard;
