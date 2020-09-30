import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import WorldMap from '../d3/WorldMap';
import './MapWrapper.scss';

function MapWrapper({ countryData, map, setNewMap, updateMap, clearMapData }) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();
	/* const [map, setMap] = useState(null); */

	// Update our map rendering everytime we receive new data from the data component
	/* 	useEffect(() => {
		if (!map) setMap(new WorldMap(svgRef.current));
		else map.update(countryData);
	}, [map, countryData]); */

	useEffect(() => {
		if (!map) setNewMap(svgRef.current);
		else updateMap();
	}, [map, countryData]);

	/* const clearMapData = () => {
		map.clearMap();
	}; */

	return (
		<div className='map-container'>
			<svg ref={svgRef} className='map-vis'></svg>
			<Button onClick={clearMapData}>Clear</Button>
		</div>
	);
}

export default MapWrapper;
