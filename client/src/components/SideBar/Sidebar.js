import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

import DataCard from './DataCard/DataCard';
import StartAudioButton from './AudioControls/StartAudioButton';
import RestartAudioButton from './AudioControls/RestartAudioButton';
import ClearButton from './AudioControls/ClearButton';

import DateInput from './DateSelectors/DateInput';
import CountrySelector from './CountrySelector/CountrySelector';
import DayIntervalInput from './DayInterval/DayIntervalInput';

import SaveCompositionModal from './SaveComposition/SaveCompositionModal';

// import VolumeSlider from './VolumeSlider';

import './SideBar.scss';

function Sidebar(props) {
	const [synthGroup, setSynthGroup] = useState([]);

	/**********************************************/
	/* ------ SYNTHS AND AUDIO FUNCTIONS ---------*/
	/**********************************************/

	//creates synths and effects
	useEffect(() => {
		setSynthGroup([]);
		// console.log('synthcreation. no. of synths: ', props.noSynths);
		for (let i = 0; i < props.noSynths; i++) {
			const synth = new Tone.Synth();
			const delay = new Tone.FeedbackDelay({
				delayTime: 0.5,
				feedback: 0.3,
			});
			const filter = new Tone.BiquadFilter({
				frequency: 750,
				type: 'highpass',
			});
			const distortion = new Tone.Distortion({
				distortion: 0.3,
				wet: 1,
			});
			const volume = new Tone.Volume(-18);
			synth.chain(filter, distortion, delay, volume, Tone.Destination);
			setSynthGroup((previous) => [
				...previous,
				{
					synth,
					delay,
					filter,
					distortion,
					volume,
				},
			]);
		}
	}, [props.noSynths]);

	//plays the sounds
	useEffect(() => {
		if (synthGroup.length !== 0) {
			//We can get the logic to get the notes and modify stuff out to another function
			const note = ['D4', 'G2', 'B3', 'F#4', 'A5', 'D3', 'G4'];
			for (let i = 0; i < synthGroup.length; i++) {
				// update parameters
				const new_deaths = props.countryData[i].data['new_deaths'];
				if (new_deaths < 20) {
					synthGroup[i].delay.set({
						delayTime: 0.75,
						feedback: 0.2,
					});
				} else if (new_deaths > 20 && new_deaths < 50) {
					synthGroup[i].delay.set({
						delayTime: 0.5,
						feedback: 0.5,
					});
				} else if (new_deaths > 50 && new_deaths < 100) {
					synthGroup[i].delay.set({
						delayTime: 0.25,
						feedback: 0.6,
					});
				}

				const new_cases = props.countryData[i].data['new_cases'];
				if (new_cases <= 500) {
					synthGroup[i].volume.set({
						volume: -20,
					});
				} else if (new_cases > 500 && new_cases < 1500) {
					synthGroup[i].volume.set({
						volume: -16,
					});
				} else if (new_cases > 1500 && new_cases < 3000) {
					synthGroup[i].volume.set({
						volume: -12,
					});
				} else {
					synthGroup[i].volume.set({
						volume: -8,
					});
				}

				if (new_deaths) {
					synthGroup[i].synth.triggerAttackRelease(
						note[i % note.length],
						'16n'
					);
					// console.log('playing a synth', new_deaths);
				}
			}
		}
	}, [props.countryData]);

	//sets tempo. not sure if it is necessary
	// useEffect(() => {
	// 	Tone.Transport.bpm.value = 1 / (props.interval/1000) * 240;
	// 	console.log(Tone.Transport.bpm.value)
	// }, [props.interval])
	
	
	

	const clearMapData = () => {
		props.clearMapData();
	};

	const setStartDate = (date) => {
		props.setDates((prev) => ({ ...prev, startDate: date }));
	};

	const setEndDate = (date) => {
		props.setDates((prev) => ({ ...prev, endDate: date }));
	};

	const displayCountryDataCards = () => {
		if (props.countryData) {
			return props.countryData.map((item, i) => {
				return (
					<DataCard
						key={i}
						countryData={item.data}
						countryInfo={item.countryInfo}
					/>
				);
			});
		}
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<div className='sidebar__top--title'>
					<h1>Sonification Menu</h1>
				</div>

				<div className='sidebar__top-body'>
					<div className='sidebar__top--calendar'>
						<DateInput
							name='Start'
							date={props.dates.startDate}
							setDate={setStartDate}
						/>
						<DateInput
							name='End'
							date={props.dates.endDate}
							setDate={setEndDate}
						/>
					</div>
					<div className='sidebar__top--day-duration'>
						<DayIntervalInput
							setInterval={props.setInterval}
							interval={props.interval}
						/>
					</div>
					<div className='sidebar__top--country-selector'>
						<CountrySelector
							countries={props.allCountries}
							selected={props.countriesSelected}
							setSelected={props.setCountriesSelected}
							setQuery={props.setQuery}
						/>
					</div>
					<div className='sidebar__top--button-controls'>
						<RestartAudioButton restart={props.restart} />
						<StartAudioButton setPlay={props.playButtonClick} />
						<ClearButton onClick={clearMapData} />
					</div>
					<div className='sidebar__bottom--save'>
						{/* <Button variant='outline-light' onClick={props.saveComposition}>
							Save your composition
						</Button> */}
						<SaveCompositionModal saveComposition={props.saveComposition} />
					</div>
				</div>
			</div>
			<div className='sidebar__bottom'>{displayCountryDataCards()}</div>
		</div>
	);
}

export default Sidebar;
