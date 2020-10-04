import React from 'react';
import MultiSelect from 'react-multi-select-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckSquare,
	faWindowClose,
} from '@fortawesome/free-regular-svg-icons';

import './CountrySelector.scss';

function CountrySelector(props) {
	const { countries } = props;

	let options = countries.map((country) => {
		return {
			label: country.name,
			value: country.alpha2,
		}
	});

	//use this method to filter any countries that produce errors in our app (they dont have enough data)
	options = options.filter( element => !['AW', 'GL', 'GP', 'GU', 'GG'].includes(element.value))

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
