import React, { useEffect, useRef } from 'react';
import './MapWrapper.scss';

function MapWrapper({ countryData, map, setNewMap, updateMap }) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();

	useEffect(() => {
		if (!map) setNewMap(svgRef.current);
		else updateMap();
	}, [map, countryData, setNewMap, updateMap]);

	return (
		<div className='map-container'>
			<svg ref={svgRef} className='map-vis'></svg>
		</div>
	);
}

export default MapWrapper;
