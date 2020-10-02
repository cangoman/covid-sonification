import React from 'react';

import { Card } from 'react-bootstrap';

import './DataCard.scss';

function DataCard(props) {
	// console.log('countryData datacard.js:', props.countryData);

	const displayCountryData = () => {
		if (props.countryData) {
			return props.countryData.map((item) => {
				return (
					<Card.Text>
						<span>date: {props.date}</span>
						<span>country: {item.data.country}</span>
						<span>cases: {item.data.cases}</span>
						<span>deaths: {item.data.deaths}</span>
						<span>
							recovered:
							{props.countryData.recovered}
						</span>
					</Card.Text>
				);
			});
		}
	};

	return (
		// <Card bg='dark' text='white'>
		// 	<Card.Header>{props.date}</Card.Header>
		// 	<Card.Body>{displayCountryData()}</Card.Body>
		// </Card>
		<>
			<div className='data-card'>
				<div className='data-card__title'>{props.countryInfo.name}</div>
				<div className='data-card__body'>
					<div className='data-card__body--top'>
						<div className='data-card__body--top-left'>DAY</div>
						<div className='data-card__body--top-right'>
							<span className='data-card__body--top-right-case'>
								{props.countryData.new_cases}
							</span>
							<span> / </span>
							<span className='data-card__body--top-right-death'>
								{props.countryData.new_deaths}
							</span>
							<span> / </span>
							<span className='data-card__body--top-right-recover'>
								{props.countryData.new_recoveries}
							</span>
						</div>
					</div>
					<div className='data-card__body--bottom'>
						<div className='data-card__body--bottom-left'>TOT</div>
						<div className='data-card__body--bottom-right'>
							<span className='data-card__body--bottom-right-case'>
								{props.countryData.cases}
							</span>
							<span> / </span>
							<span className='data-card__body--bottom-right-death'>
								{props.countryData.deaths}
							</span>
							<span> / </span>
							<span className='data-card__body--bottom-right-recover'>
								{props.countryData.recovered}
							</span>
						</div>
					</div>
				</div>
				<div className='data-card__footer'>
					<span>Cases / Deaths / Recovered</span>
				</div>
			</div>
		</>
	);
}

export default DataCard;
