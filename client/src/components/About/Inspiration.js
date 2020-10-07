import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import './AboutCard.scss';

function Inspiration() {
	return (
		<div className='about--card'>
			<div className='about--card-title'>
				<h1>
					<FontAwesomeIcon icon={faLightbulb} />
					Inspiration
				</h1>
			</div>
			<div className='about--card-body'>
				<span>
					We initially wanted to incorporate COVID data and sound in a project
					and coming across data sonification gave us an idea to combine both of
					our interests to build our app.
				</span>
				<br />
				<span>
					Our inspiration for the project came from Brian Foo’s{' '}
					<a href='https://vimeo.com/132833445' target='_blank'>
						“Distance From Home - Translating Global Refugee Movement to Song.”
					</a>
				</span>
			</div>
		</div>
	);
}

export default Inspiration;
