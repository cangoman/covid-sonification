import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import './StartAudioButton.scss';

function StartAudioButton(props) {
	const [audioOn, setAudioOn] = useState(false);
	const [playIcon, setPlayIcon] = useState(false);

	const handleClick = () => {
		if (!audioOn) initializeAudio();
		else if (Tone.context.state !== 'running') Tone.context.resume();
		props.setPlay();
		setPlayIcon((prev) => !prev);
	};

	const initializeAudio = async () => {
		await Tone.start();
		console.log('Audio ready');
		setAudioOn(true);
	};

	const playButtonIcon = () => {
		return playIcon === false ? (
			<FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
		) : (
			<FontAwesomeIcon icon={faPauseCircle} className='pause-icon' />
		);
	};

	return (
		<div className='start-audio-button'>
			<a onClick={() => handleClick()}>{playButtonIcon()}</a>
		</div>
	);
}

export default StartAudioButton;
