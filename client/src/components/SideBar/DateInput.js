import React, { useState } from 'react';
import './DateInput.scss';

const moment = require('moment');

function DateInput(props) {
<<<<<<< HEAD
  const today = new Date();
  const dayLimit = moment(today).format("YYYY-MM-DD")
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <input name={props.name} type="date" value={props.date} onChange={e => props.setDate(e.currentTarget.value)} min={'2020-01-20'} max={dayLimit}></input>
    </>
  )
=======
	const today = new Date();
	const dayLimit = moment(today).format('YYYY-MM-DD');

	return (
		<div className='date-input__container'>
			<div className='date-input__container--left'>
				<label htmlFor={props.name}>{props.name}</label>
			</div>
			<div className='date-input__container--right'>
				<input
					name={props.name}
					type='date'
					value={props.date}
					onChange={(e) => props.setDate(e.currentTarget.value)}
					min={'2020-01-20'}
					max={dayLimit}
				></input>
			</div>
		</div>
	);
>>>>>>> feature/data-card
}

export default DateInput;
