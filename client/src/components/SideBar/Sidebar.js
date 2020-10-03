import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import * as Tone from 'tone';

import DataCard from './DataCard';
import StartAudioButton from './StartAudioButton';
import RestartAudioButton from './RestartAudioButton';
import ClearButton from './ClearButton';

import DateInput from './DateInput';
<<<<<<< HEAD
import CountrySelector from './CountrySelector'
=======
import DayIntervalInput from './DayIntervalInput';
>>>>>>> feature/data-card

// import VolumeSlider from './VolumeSlider';

import './SideBar.scss';

function Sidebar(props) {
	const [synthGroup, setSynthGroup] = useState([]);
	// const [sampler, setSampler] = useState();

	// const delayTimes = [0.25, 0.4, 0.8, 0.33];

	//create my synths and effects
	useEffect(() => {
		setSynthGroup([]);
		console.log('synthcreation. no. of synths: ', props.noSynths)
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

	//plays the sounds and stuff
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
					synthGroup[i].synth.triggerAttackRelease(note[i % note.length], '16n');
					console.log('playing a synth', new_deaths);
				}
			}
		}
	}, [props.countryData]);

	const clearMapData = () => {
		props.clearMapData();
	};

	// useEffect(() => {
	// 	console.log("sidebar, prop.dates: ", props.dates)
	// }, [props.dates]);

	const setStartDate = (date) => {
		props.setDates((prev) => ({ ...prev, startDate: date }));
	};

	const setEndDate = (date) => {
		props.setDates((prev) => ({ ...prev, endDate: date }));
	};

	const displayCountryData = () => {
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
<<<<<<< HEAD

				<div className='sidebar__top-body'>
					<StartAudioButton setPlay={props.playButtonClick} />
					<Button variant='outline-light' onClick={props.restart}>
						Restart
					</Button>
					<Button variant='outline-danger' onClick={clearMapData}>
						Clear Map
					</Button>
				</div>
				<CountrySelector 
					countries={props.allCountries} 
					selected={props.countriesSelected}
					setSelected={props.setCountriesSelected}
					setQuery={props.setQuery}
				/>
				<div className='date-ranges'>
=======
				<div className='sidebar__top--calendar'>
>>>>>>> feature/data-card
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
<<<<<<< HEAD
				<div className='day-duration'>
					<label htmlFor='day-duration'>Duration of day (in seconds)</label>
					<input
						name='day-duration'
						type='number'
						max='5000'
						step='0.1'
						value={props.interval / 1000}
						onChange={(e) => props.setInterval(e.currentTarget.value * 1000)}
=======
				<div className='sidebar__top--day-duration'>
					<DayIntervalInput
						setInterval={props.setInterval}
						interval={props.interval}
>>>>>>> feature/data-card
					/>
				</div>
				<div className='sidebar__top--button-controls'>
					<RestartAudioButton restart={props.restart} />
					<StartAudioButton setPlay={props.playButtonClick} />
					<ClearButton onClick={clearMapData} />
				</div>
			</div>
			<div className='sidebar__bottom'>{displayCountryData()}</div>
		</div>
	);
}

export default Sidebar;
