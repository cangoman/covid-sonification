import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faFacebookF, faTwitter } from '@fortawesome/free-solid-svg-icons';

import './DashboardCard.scss';

function DashboardCard(props) {
	console.log(props.state);

	return (
		<div className='dashboard-card__container'>
			<div className='dashboard-card__title'>
				<h1>Composition</h1>
				<div className='dashboard-card__title--social'>
					<FontAwesomeIcon icon={faFacebookF} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faEnvelope} />
				</div>
			</div>
			<div className='dashboard-card__table'>
				<>
					<div className='dashboard-card__table--row-header'>
						<div className='dashboard-card__table--row-header-left'>Title</div>
						<div className='dashboard-card__table--row-header-right'>
							Created On
						</div>
					</div>
					<div className='dashboard-card__table--row-text'>
						<a
							href={props.link}
							className='dashboard-card__table--row-text-left'
						>
							{props.title}
						</a>
						<div className='dashboard-card__table--row-text-right'>
							{props.createdOn.substr(0, 10)}
						</div>
					</div>
				</>

				<>
					<div className='dashboard-card__table--row-header'>
						<div className='dashboard-card__table--row-header-left'>
							Date Range
						</div>
						<div className='dashboard-card__table--row-header-right'></div>
					</div>
					<div className='dashboard-card__table--row-text'>
						<div className='dashboard-card__table--row-text-left'>
							{props.startDate} ~ {props.endDate}
						</div>
						<div className='dashboard-card__table--row-text-right'></div>
					</div>
				</>

				<>
					<div className='dashboard-card__table--row-header'>
						<div className='dashboard-card__table--row-header-left'>
							Day Interval (ms)
						</div>
						<div className='dashboard-card__table--row-header-right'></div>
					</div>
					<div className='dashboard-card__table--row-text'>
						<div className='dashboard-card__table--row-text-left'>
							{props.interval}
						</div>
						<div className='dashboard-card__table--row-text-right'></div>
					</div>
				</>

				<>
					<div className='dashboard-card__table--row-header'>
						<div className='dashboard-card__table--row-header-left'>
							Selected Countries
						</div>
						<div className='dashboard-card__table--row-header-right'></div>
					</div>
					<div className='dashboard-card__table--row-text'>
						<div className='dashboard-card__table--row-text-left'>
							{props.countries.join(', ')}
						</div>
						<div className='dashboard-card__table--row-text-right'></div>
					</div>
				</>
			</div>
		</div>
	);
}

export default DashboardCard;
