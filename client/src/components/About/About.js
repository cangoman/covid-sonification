import React from 'react';
import AboutCard from './AboutCard';

import {
	faBullseye,
	faHeadphonesAlt,
	faCode,
	faMusic,
	faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import {
	faMap,
	faLightbulb,
	faUser,
	faStar,
} from '@fortawesome/free-regular-svg-icons';

import './About.scss';

function About() {
	return (
		<div className='about__container'>
			<div className='about-cards__container'>
				<AboutCard
					title='Goal'
					text='The goal of the project was to'
					icon={faBullseye}
				/>
				<AboutCard
					title='What is Data Sonification?'
					text='Process of translating data into sound using sonification. It is the auditory equivalent of the more established practice of data visualization.'
					icon={faHeadphonesAlt}
				/>
				<AboutCard
					title='Tech Stack'
					text='The goal of the project was to'
					icon={faCode}
				/>
				<AboutCard
					title='Composition'
					text='The goal of the project was to'
					icon={faMusic}
				/>
				<AboutCard
					title='Visuals'
					text='The goal of the project was to'
					icon={faMap}
				/>
				<AboutCard
					title='Dataset'
					text='The goal of the project was to'
					icon={faDatabase}
				/>
				<AboutCard
					title='Inspiration'
					text='The goal of the project was to'
					icon={faLightbulb}
				/>
				<AboutCard
					title='User Experience'
					text='The goal of the project was to'
					icon={faUser}
				/>
				<AboutCard
					title='Special thanks'
					text='The goal of the project was to'
					icon={faStar}
				/>
			</div>
		</div>
	);
}

export default About;
