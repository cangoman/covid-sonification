import React, { useState, useEffect, useRef } from 'react';

import WorldMap from '../d3/WorldMap';
import './MapWrapper.scss';
import useInterval from '../hooks/useInterval'

function MapWrapper(props) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();
	const [map, setMap] = useState(null);
	
	//This is what we could save to out database to save a composition
	const [countryData, setCountryData] = useState([]);
	
	
	const [counter, setCounter] = useState(5);
	
	
	//this needs to come from the top, cause the same counter should control audio and visuals, and the delay is the same for both
	const [play, setPlay] = useState(true)
	let delay = 1500;
	
	useInterval(() => {
		if (play) {
			const data = props.data.map( element => {
				return { 
					countryInfo: {
						lat: element.countryInfo.latlng[0],
						long: element.countryInfo.latlng[1]
					},
					data: element.data[counter]
				}
			})
			setCountryData(data);
			setCounter(oldCount => oldCount - 1)
			if (counter === 1) {
				// console.log("danger");
				setPlay(false)
			}
			// console.log(data, counter, play)

		}	
	}, play ? delay : null) 

	useEffect(() => {
		if (!map) setMap(new WorldMap(svgRef.current));
		else map.update(countryData);
	}, [map, countryData]);

	return (
		<div className='map-container'>
			<svg ref={svgRef} className='map-vis'></svg>
		</div>
	);
}

export default MapWrapper;
