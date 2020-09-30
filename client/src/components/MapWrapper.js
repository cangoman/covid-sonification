import React, { useState, useEffect, useRef } from 'react';

import WorldMap from '../d3/WorldMap';
import './MapWrapper.scss';


function MapWrapper({countryData}) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();
	const [map, setMap] = useState(null);
	
	// Update our map rendering everytime we receive new data from the data component
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
