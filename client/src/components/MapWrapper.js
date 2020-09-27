import React, { useState, useEffect, useRef } from 'react';
// import { Row, Col, Card } from 'react-bootstrap';

import WorldMap from '../d3/WorldMap';
// import countryData from '../d3/dummyData'

function MapWrapper(props) {
	// create a hook to refer to our svg element and set the map
	const svgRef = useRef();
	const [map, setMap] = useState(null);

	const [countryData, setCountryData] = useState([]);

	//data will come from the top level, we'll format it and pass it to both visual and sound components

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://corona.lmao.ninja/v2/countries');
			const data = await response.json();
			setCountryData(data);
		}
		fetchData();
	}, []);

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
