import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import './AboutCard.scss';

function Composition() {
	return (
		<div className='about--card'>
			<div className='about--card-title'>
				<h1>
					<FontAwesomeIcon icon={faMusic} />
					Composition
				</h1>
			</div>
			<div className='about--card-body'>
				<span>
					Composition is created from two data points producing the sound: daily
					cases and daily deaths. Each country is mapped to a note and makes a
					sound based on the day’s reported cases and deaths.
				</span>
				<br />
				<span>
					The volume of each note is determined by the number of new cases and
					the number of daily deaths are mapped to a delay effect on each
					synthesizer - higher number of deaths result in a more rapid and
					audible echo.
				</span>
			</div>
		</div>
	);
}

export default Composition;
