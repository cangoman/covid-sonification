import React from 'react';
import AboutCard from './AboutCard';
import TechStack from './TechStack';
import Dataset from './Dataset';
import Inspiration from './Inspiration';
import Special from './Special';
import Composition from './Composition';

import { faBullseye, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { faMap, faUser } from '@fortawesome/free-regular-svg-icons';

import './About.scss';

function About() {
	return (
		<div className='about__container'>
			<div className='about-cards__container'>
				<AboutCard
					title='Goal'
					text='The goal of this project was to visually and auditorily present the spread of coronavirus over time through data visualization and data sonification.'
					icon={faBullseye}
				/>
				<AboutCard
					title='What is Data Sonification?'
					text='Process of translating data into sound using sonification. It is the auditory equivalent of the more established practice of data visualization.'
					icon={faHeadphonesAlt}
				/>

				<TechStack />
				{/* <AboutCard
					title='Composition'
					text='Composition is created from two data points to produce the sound: daily cases and daily deaths. Each country is mapped to a note and it will make a sound based on the day’s reported cases and deaths. The volume of each note is determined by the number of new cases and the number of daily deaths are mapped to a delay effect on each synthesizer - higher number of deaths result in a more rapid and audible echo.'
					icon={faMusic}
				/> */}
				<Composition />
				<AboutCard
					title='Visuals'
					text='Data shown on the map corresponds to the number of daily cases for the country and the size of the circle is relative to other selected countries’ daily cases.'
					icon={faMap}
				/>

				<Dataset />

				<Inspiration />
				<AboutCard
					title='User Experience'
					text='We wanted to convey the severity of the spread of coronavirus and its effects so that the users could visually and auditorily experience and compare how the coronavirus is affecting different countries around the world.'
					icon={faUser}
				/>

				<Special />
			</div>
		</div>
	);
}

export default About;
