import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckSquare,
	faWindowClose,
} from '@fortawesome/free-regular-svg-icons';

import './CountrySelector.scss';

function CountrySelector(props) {
	const { countries } = props;
	// console.log(countries)
	const options = countries.map((country) => {
		return {
			label: country.name,
			value: country.alpha2,
		};
	});

	return (
		<div className='country-selector__container'>
			<div className='country-selector__container--left'>
				<MultiSelect
					hasSelectAll={false}
					options={options}
					value={props.selected}
					onChange={props.setSelected}
					labelledBy={'Select Countries'}
				/>
			</div>
			<div className='country-selector__container--right'>
				{/* <Button
					variant='outline-light'
					onClick={() => {
						props.setQuery(props.selected.map((country) => country.label));
					}}
				>
					Confirm Selection
				</Button> */}
				<FontAwesomeIcon
					icon={faCheckSquare}
					onClick={() => {
						props.setQuery(props.selected.map((country) => country.label));
					}}
					className='country-selector-confirm'
				/>

				{/* <Button variant='outline-light' onClick={() => props.setSelected([])}>
					Clear Selection
				</Button> */}
				<FontAwesomeIcon
					icon={faWindowClose}
					onClick={() => props.setSelected([])}
					className='country-selector-cancel'
				/>
			</div>
		</div>
	);
}

export default CountrySelector;
