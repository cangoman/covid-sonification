import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './ClearButton.scss';

function ClearButton(props) {
	return (
		<div className='clear-button__container'>
			<FontAwesomeIcon
				icon={faTimes}
				onClick={props.onClick}
				className='clear-button'
			/>
		</div>
	);
}

export default ClearButton;
