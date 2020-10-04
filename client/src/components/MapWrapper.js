import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import WorldMap from '../d3/WorldMap';
import './MapWrapper.scss';

function MapWrapper({ countryData, map, setNewMap, updateMap }) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();

	useEffect(() => {
		if (!map) setNewMap(svgRef.current);
		else updateMap();
	}, [map, countryData]);

	return (
		<div className='map-container'>
			<svg ref={svgRef} className='map-vis'></svg>
		</div>
	);
}

export default MapWrapper;
