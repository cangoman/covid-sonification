import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import * as Tone from 'tone'

import DataCard from './DataCard';
import StartAudioButton from './StartAudioButton'

import './SideBar.scss';

function Sidebar(props) {
	const [synths, setSynths] = useState([]);
	const [delay, setDelay] = useState([])

	const delayTimes = [0.25, 0.4, 0.8, 0.33];

	useEffect(() => {
		for (let i = 0; i < props.noSynths; i++) {
			setDelay(	prev => [
				...prev, new Tone.FeedbackDelay({
				delayTime: delayTimes[i],
				maxDelay: 1
			})
			.toDestination()]);
			setSynths( prev => [...prev, new Tone.Synth().toDestination() ]);
		}
	}, [])



	useEffect(() => {
		synths.forEach( (synth, index) => synth.connect(delay[index]));
	}, [synths, delay])	

	const notes = ['D4', 'F#4', "C5"] 

	useEffect(() => {
		if (synths.length !== 0) {	
			for (let i = 0; i < props.noSynths; i++) {
				synths[i].triggerAttackRelease(notes[i], '8n')
			}
		}
		
	}, [props.countryData])
	
	
	return (
		<div>
			<h1>Sonification Menu</h1>
			<StartAudioButton setPlay={props.playButtonClick}/>
			<Button variant="outline-dark" onClick={props.restart}>Restart</Button>
			<DataCard />
			<DataCard />
		</div>
	);
}

export default Sidebar;
