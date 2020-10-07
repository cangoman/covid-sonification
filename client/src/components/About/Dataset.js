import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './AboutCard.scss';

function Dataset() {
	return (
		<div className='about--card'>
			<div className='about--card-title'>
				<h1>
					<FontAwesomeIcon icon={faDatabase} />
					Dataset
				</h1>
			</div>
			<div className='about--card-body'>
				<span>
					Data is fetched from{' '}
					<a href='https://covid19-api.org' target='_blank'>
						COVID-19 API
					</a>{' '}
					which provides regularly updated, time stamped data for individual
					countries.
				</span>
				<br />
				<span>
					The data from this API only provides a total number of cases, deaths
					and recoveries to date so we created an algorithm to calculate the
					number of new cases, deaths and recoveries.
				</span>
				<br />
				<span>
					Once the data has been processed, we create an array with all the
					countries separated by day. Each day is then fed to both the sound and
					visual engines to produce visualization and composition.
				</span>
			</div>
		</div>
	);
}

export default Dataset;
