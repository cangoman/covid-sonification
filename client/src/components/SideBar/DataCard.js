import React from 'react';

import { Card } from 'react-bootstrap';

import './DataCard.scss';

function DataCard(props) {
	console.log('countryData datacard.js:', props.countryData);

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
		<Card bg='dark' text='white'>
			<Card.Header>{props.date}</Card.Header>
			<Card.Body>{displayCountryData()}</Card.Body>
		</Card>
	);
}

export default DataCard;
