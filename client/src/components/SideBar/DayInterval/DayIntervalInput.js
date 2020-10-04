import React from 'react';
import './DayIntervalInput.scss';

function DayIntervalInput(props) {
	return (
		<div className='day-interval-input__container'>
			<div className='day-interval-input__container--left'>
				<label htmlFor='day-duration'>Day interval</label>
			</div>
			<div className='day-interval-input__container--right'>
				<input
					name='day-duration'
					type='number'
					max='5000'
					step='0.1'
					value={props.interval / 1000}
					placeholder='seconds'
					onChange={(e) => props.setInterval(e.currentTarget.value * 1000)}
				/>
				<span>seconds</span>
			</div>
		</div>
	);
}

export default DayIntervalInput;
