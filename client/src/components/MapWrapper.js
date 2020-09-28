import React, { useState, useEffect, useRef } from 'react';

import WorldMap from '../d3/WorldMap';
import './MapWrapper.scss';
import useInterval from '../hooks/useInterval'

function MapWrapper(props) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();
	const [map, setMap] = useState(null);
	
	const [countryData, setCountryData] = useState([]);

	// useInterval(callback, delay)
	// if (props.data) {
	// 	const keys = Object.keys(props.data.timeline.deaths)
	// }
	// 	console.log("MW: ", keys)
		let index = 0;


	// useInterval( () => {
	// 	const data = {
	// 		countryInfo: {
	// 			lat: 4.6,
	// 			long: -74.1
	// 		},
	// 		deaths: Math.floor( Math.random() * 10000)
	// 	}
	// 	setCountryData([data]);
	// 	console.log(countryData)
	// 	}, 1500)


	// console.log("MW, data coming down as props:", props.data)

	//data will come from the top level, we'll format it and pass it to both visual and sound components

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch('https://corona.lmao.ninja/v2/countries');
	// 		const data = await response.json();
	// 		setCountryData(data);
	// 	}
	// 	fetchData();
	// }, []);

	useEffect(() => {
		// DrawWorldMap(svgRef.current);
		if (!map) setMap(new WorldMap(svgRef.current));
		else map.update(countryData);
	}, [map, countryData]);

	return (
		// <Row>
		//   <Col sm="12" md="9" lg="9" xl="9" >
		<div className='map-container'>
			<svg ref={svgRef} className='map-vis'></svg>
		</div>
		//   </Col>
		// </Row>
	);
}

export default MapWrapper;
