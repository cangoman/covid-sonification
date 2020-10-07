import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AboutCard.scss';

function AboutCard(props) {
	return (
		<div className='about--card'>
			<div className='about--card-title'>
				<h1>
					<FontAwesomeIcon icon={props.icon} />
					{props.title}
				</h1>
			</div>
			<div className='about--card-body'>
				<p>{props.text}</p>
			</div>
		</div>
	);
}

export default AboutCard;
