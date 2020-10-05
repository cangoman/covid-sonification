import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

import './AboutCard.scss';

function AboutCard(props) {
	return (
		<div className='about--card'>
			<h1>
				<FontAwesomeIcon icon={props.icon} />
				{props.title}
			</h1>

			<p>{props.text}</p>
		</div>
	);
}

export default AboutCard;
