import React from 'react';

import './DataCard.scss';

function DataCard(props) {

	return (

		<>
			<div className='data-card'>
				<div className='data-card__title'>{props.countryInfo.name}</div>
				<div className='data-card__body'>
					<div className='data-card__body--top'>
						<div className='data-card__body--top-left'>DAY</div>
						<div className='data-card__body--top-right'>
							<span className='data-card__body--top-right-case'>
								{props.countryData.new_cases}
							</span>
							<span> | </span>
							<span className='data-card__body--top-right-death'>
								{props.countryData.new_deaths}
							</span>
							<span> | </span>
							<span className='data-card__body--top-right-recover'>
								{props.countryData.new_recoveries}
							</span>
						</div>
					</div>
					<div className='data-card__body--bottom'>
						<div className='data-card__body--bottom-left'>TOT</div>
						<div className='data-card__body--bottom-right'>
							<span className='data-card__body--bottom-right-case'>
								{props.countryData.cases}
							</span>
							<span> | </span>
							<span className='data-card__body--bottom-right-death'>
								{props.countryData.deaths}
							</span>
							<span> | </span>
							<span className='data-card__body--bottom-right-recover'>
								{props.countryData.recovered}
							</span>
						</div>
					</div>
				</div>
				<div className='data-card__footer'>
					<div className='data-card__footer--left'></div>
					<div className='data-card__footer--right'>
						<span>Cases</span>
						<span> | </span>
						<span>Deaths</span>
						<span> | </span>
						<span>Recovered</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default DataCard;
