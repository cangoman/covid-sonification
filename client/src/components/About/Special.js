import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import './AboutCard.scss';

function Special() {
	return (
		<div className='about--card'>
			<div className='about--card-title'>
				<h1>
					<FontAwesomeIcon icon={faStar} />
					Special Thanks to Brian Foo
				</h1>
			</div>
			<div className='about--card-body'>
				<span>
					Brian Foo is a computer scientist and artist living in New York who
					uses data sonification in a lot of his work. Brian kindly agreed to
					talk to us about data sonification and offered valuable input for this
					project.{' '}
					<a href='https://brianfoo.com/' target='_blank'>
						Check out his work
					</a>
				</span>
			</div>
		</div>
	);
}

export default Special;
