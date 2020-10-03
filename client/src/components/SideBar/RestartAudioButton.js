import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

import './RestartAudioButton.scss';

function RestartAudioButton(props) {
	return (
		<div className='restart-audio-button__container'>
			<FontAwesomeIcon
				icon={faStepBackward}
				onClick={props.restart}
				className='restart-button'
			/>
		</div>
	);
}

export default RestartAudioButton;
