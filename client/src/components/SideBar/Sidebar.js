import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import * as Tone from 'tone';

import DataCard from './DataCard';
import StartAudioButton from './StartAudioButton';
// import VolumeSlider from './VolumeSlider';

import './SideBar.scss';

function Sidebar(props) {
	const [synthGroup, setSynthGroup] = useState([]);
	const [synths, setSynths] = useState([]);
	const [delay, setDelay] = useState([]);
	const [sampler, setSampler] = useState();

	const delayTimes = [0.25, 0.4, 0.8, 0.33];

	useEffect(() => {
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
	}, []);

	// useEffect(() => {
	// 	console.log(synthGroup)
	// }, [synthGroup])

	useEffect(() => {
		if (synthGroup.length !== 0) {
			//We can get the logic to get the notes and modify stuff out to another function
			const note = ['D4', 'G2', 'B3', 'F#4', 'A5', 'D3'];
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
					synthGroup[i].synth.triggerAttackRelease(note[i], '16n');
					console.log(new_deaths);
				}
			}
		}

		// 	// update parameters
		// 	const new_deaths = props.countryData[0].data["new_deaths"]
		// 	if ( new_deaths < 20) {
		// 		synthGroup[0].delay.set({
		// 			delayTime: 0.75,
		// 			feedback: 0.2
		// 		})
		// 	} else if ( new_deaths > 20 && new_deaths < 50 ) {
		// 		synthGroup[0].delay.set({
		// 			delayTime: 0.50,
		// 			feedback: 0.5
		// 		})
		// 	} else if (new_deaths > 50 && new_deaths < 100) {
		// 		synthGroup[0].delay.set({
		// 			delayTime: 0.25,
		// 			feedback: 0.6
		// 		})
		// 	}

		// 	const new_cases = props.countryData[0].data["new_cases"]
		// 	console.log(new_cases)
		// 	if ( new_cases <= 500) {
		// 		synthGroup[0].volume.set({
		// 			volume: -20
		// 		})
		// 	} else if ( new_cases > 500 && new_cases < 1500 ) {
		// 		synthGroup[0].volume.set({
		// 			volume: -16,

		// 		})
		// 	} else if (new_cases > 1500 && new_cases < 3000) {
		// 		synthGroup[0].volume.set({
		// 			volume: -12
		// 		})
		// 	} else {
		// 		synthGroup[0].volume.set({
		// 			volume: -8
		// 		})
		// 	}
		// 	if (new_deaths)
		// 		synthGroup[0].synth.triggerAttackRelease('D4', "8n")
		// }
	}, [props.countryData]);

	//THIS IS WORKING RN
	// useEffect(() => {
	// 	for (let i = 0; i < props.noSynths; i++) {
	// 		setDelay(	prev => [
	// 			...prev, new Tone.FeedbackDelay({
	// 			delayTime: delayTimes[i],
	// 			maxDelay: 1
	// 		})
	// 		.toDestination()]);
	// 		setSynths( prev => [...prev, new Tone.Synth().toDestination() ]);
	// 	}
	// }, [])

	// useEffect(() => {
	// 	synths.forEach( (synth, index) => synth.connect(delay[index]));
	// }, [synths, delay])

	const notes = ['D4', 'F#4', 'C5'];

	// useEffect(() => {

	// 	if (synths.length !== 0) {
	// 		//update parameters
	// 		// Play notes
	// 		for (let i = 0; i < props.noSynths; i++) {
	// 			synths[i].triggerAttackRelease(notes[i], '8n')
	// 		}
	// 	}
	// }, [props.countryData])

	const clearMapData = () => {
		props.clearMapData();
	};

	return (
		<div className='sidebar'>
			<h1>Sonification Menu</h1>
			<StartAudioButton setPlay={props.playButtonClick} />
			<Button variant='outline-light' onClick={props.restart}>
				Restart
			</Button>
			<Button variant='outline-danger' onClick={clearMapData}>
				Clear Map
			</Button>
			<DataCard date={props.date} countryData={props.countryData} />
		</div>
	);
}

export default Sidebar;
