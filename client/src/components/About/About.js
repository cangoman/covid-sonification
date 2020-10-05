import React from 'react';
import './About.scss';

function About() {
	return (
		<div className='about__container'>
			<div className='about__banner'>
				<h1>COVID SONIFICATION</h1>
			</div>
			<div className='about__title'>Listen to the sound of the world</div>
			<div className='about__body'>
				<div className='about__body--row'>
					<div className='about__body--row-title'>Goal</div>
					<div className='about__body--row-text'>
						<p>The goal of our project was to...</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
