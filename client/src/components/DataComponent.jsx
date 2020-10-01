import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Sidebar from './SideBar/Sidebar';
import MapWrapper from './MapWrapper';
import useInterval from '../hooks/useInterval'
import { createTimelineData, getNextDay } from '../helpers/DataFormatHelpers'
import * as Tone from 'tone'

import WorldMap from '../d3/WorldMap';

const BASE_URL = 'https://covid19-api.org/api/timeline/';

function DataComponent(props) {
  const { countries } = props;
  const [timelineData, setTimelineData] = useState([])
  const [play, setPlay] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [date, setDate] = useState(null);

  
  const initialCounter = 200;
  const [counter, setCounter] = useState(initialCounter);
  const [interval, setInterval] = useState(1000); //This may need to come from a parent component...sets the amount of time corresponding to a day

	// state for MapWrapper.js
	const [map, setMap] = useState(null);


	//This will need to be selected by the user. and rn it causes a warning on the browser
	const query = ['china', 'mexico' ,  "colombia", 'brazil',  "france", 'spain', 'morocco' ]

	useEffect(() => {
		if (countries) {
			for (const country of query) {
				const regexp = new RegExp(country, 'i');
				const countryInfo = countries.find((element) =>
					element.name.match(regexp)
				);

				if (countryInfo) {
					axios({
						method: 'GET',
						url: `${BASE_URL}${countryInfo.alpha2Code}`,
					}).then((response) => {
						const countryObject = createTimelineData(
							countryInfo,
							response.data
						);
						setTimelineData((timelineData) => [...timelineData, countryObject]);
					});
				}
			}
		}
	}, [countries]);

	useInterval(
		() => {
			if (play) {
				const data = getNextDay(timelineData, counter);
				setCountryData(data);
				setDate(data[0].date);
				setCounter((oldCount) => oldCount - 1);
				if (counter === 1) {
					setPlay(false);
				}
			}
		},
		play ? interval : null
	);

	const playButtonClick = () => {
		if (counter === 0) return;
		setPlay((prev) => !prev);
	};

	const restartCounter = () => {
		setCounter(initialCounter);
		setPlay(true);
	};

	// For MapWrapper.js in useEffect: Create new map or update
	const setNewMap = (svgRefCurrent) => {
		setMap(new WorldMap(svgRefCurrent));
	};

	const updateMap = () => {
		map.update(countryData);
	};

	const clearMapData = () => {
		map.clearMap();
	};

	return (
		<Container className='app-container' fluid>
			<Row>
				<Col xl={9}>
					<MapWrapper
						countryData={countryData}
						map={map}
						setNewMap={setNewMap}
						updateMap={updateMap}
					/>
				</Col>
				<Col xl={3}>
					<Sidebar
						date={date}
						countryData={countryData}
						noSynths={query.length}
						playButtonClick={playButtonClick}
						restart={restartCounter}
						clearMapData={clearMapData}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default DataComponent;
