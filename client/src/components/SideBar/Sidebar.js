import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import * as Tone from 'tone';

import DataCard from './DataCard';
import StartAudioButton from './StartAudioButton';
// import VolumeSlider from './VolumeSlider';

import './SideBar.scss';

function Sidebar(props) {
	const [pulse, setPulse] = useState(null);
	const [synths, setSynths] = useState([]);
	const [delay, setDelay] = useState([]);

	const vol = new Tone.Volume(-12).toDestination();
	const delayTimes = [0.25, 0.4, 0.8, 0.33];

	useEffect(() => {
		setPulse(new Tone.FatOscillator('E2', 'sawtooth', 20).toDestination());

		for (let i = 0; i < props.noSynths; i++) {
			setDelay((prev) => [
				...prev,
				new Tone.FeedbackDelay({
					delayTime: delayTimes[i],
					maxDelay: 1,
				}).toDestination(),
			]);
			setSynths((prev) => [...prev, new Tone.Synth().toDestination()]);
		}
	}, []);

	useEffect(() => {
		synths.forEach((synth, index) => synth.connect(delay[index]).connect(vol));
	}, [synths, delay]);

	const notes = ['D4', 'F#4', 'C5'];

	useEffect(() => {
		console.log(props.countryData);
		if (synths.length !== 0) {
			for (let i = 0; i < props.noSynths; i++) {
				synths[i].triggerAttackRelease(notes[i], '8n');
			}
		}
	}, [props.countryData]);

	return (
		<div>
			<h1>Sonification Menu</h1>
			<StartAudioButton setPlay={props.playButtonClick} />
			<Button variant='outline-dark' onClick={props.restart}>
				Restart
			</Button>
			<Button variant='outline-danger' clearMap={props.clearMap}>
				Clear Map
			</Button>
			<DataCard date={props.date} />
		</div>
	);
}

export default Sidebar;
