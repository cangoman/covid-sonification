import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './AboutCard.scss';

function TechStack() {
	return (
		<div className='about--card'>
			<div className='about--card-title'>
				<h1>
					<FontAwesomeIcon icon={faCode} />
					Tech Stack
				</h1>
			</div>
			<div className='about--card-body'>
				<span>Front End - React</span>
				<span>Back End - Node, Express</span>
				<span>
					Libraries &amp; Packages - React Router, SASS, Bootstrap, Axios,
					Moment, Topojson
				</span>

				<span>Data Visualization - D3.js</span>
				<span>Data Sonification - Tone.js</span>
			</div>
		</div>
	);
}

export default TechStack;
