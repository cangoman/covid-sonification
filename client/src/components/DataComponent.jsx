import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './SideBar/Sidebar';
import MapWrapper from './MapWrapper';
import useInterval from '../hooks/useInterval';
import {
	createTimelineData,
	createDailyData,
	today,
	getDateIndex,
} from '../helpers/DataFormatHelpers';
import { saveState, loadState } from '../helpers/SaveStateHelpers';

import WorldMap from '../d3/WorldMap';
import './DataComponent.scss';

const BASE_URL = 'https://covid19-api.org/api/timeline/';

function DataComponent(props) {

	/**********************************************/
	/* ------------ APPLICATION STATE ------------*/
	/**********************************************/

	const { countries } = props;
	const [timelineData, setTimelineData] = useState([]);
	const [dailyData, setDailyData] = useState([]);
	const [play, setPlay] = useState(false);
	const [countryData, setCountryData] = useState([]);
	const [dates, setDates] = useState({
		startDate: '2020-01-22',
		endDate: today(),
	});
	const [countriesSelected, setCountriesSelected] = useState([]);
	const [query, setQuery] = useState([
		'united states of america',
		'canada',
		'colombia',
		'china',
	]);

	const [counters, setCounters] = useState({
		start: null,
		current: null,
		end: null,
	});

	//Duration of a day
	const [interval, setInterval] = useState(2000);

	// state for MapWrapper.js
	const [map, setMap] = useState(null);


	/**********************************************/
	/* ----------- DATA INITIALIZATION -----------*/
	/**********************************************/

	const { id } = useParams();
	useEffect(() => {
		if (id) {
			loadState(id).then((response) => {
				if (response) {
					setQuery(response.query);
					setInterval(response.interval);
					setDates({
						startDate: response.dates.startDate,
						endDate: response.dates.endDate,
					});
				}
			});
		}
	}, [id]);

	useEffect(() => {
		setTimelineData([]);
		if (countries) {
			for (const country of query) {
				const regexp = new RegExp(country, 'i');
				const countryInfo = countries.find((element) =>
					element.name.match(regexp)
				);
				if (countryInfo) {
					axios({
						method: 'GET',
						url: `${BASE_URL}${countryInfo.alpha2}`,
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
	}, [countries, query]);

	useEffect(() => {
		if (timelineData.length !== 0) {
			setDailyData(createDailyData(timelineData));
		}
	}, [timelineData]);

	useEffect(() => {
		const startIndex = getDateIndex(dates.startDate);
		const endIndex = getDateIndex(dates.endDate);
		setCounters((prev) => ({
			current: startIndex,
			start: startIndex,
			end: endIndex,
		}));
	}, [dates]);

	/**********************************************/
	/* ---------- PLAYBACK FUNCTIONS -------------*/
	/**********************************************/

	useInterval(
		() => {
			if (play) {
				const data = dailyData[counters.current];
				setCountryData(data);
				advanceCounter();
			}
		},
		play ? interval : null
	);

	const playButtonClick = () => {
		if (counters.current === 0 || !counters.current) return;
		setPlay((prev) => !prev);
	};

	const restartCounter = () => {
		setCounters((prev) => ({ ...prev, current: prev.start }));
		setPlay(true);
	};


	const advanceCounter = () => {
		if (counters.start > counters.end) {
			setCounters((prev) => ({ ...prev, current: prev.current - 1 }));
		} else if (counters.start < counters.end) {
			setCounters((prev) => ({ ...prev, current: prev.current + 1 }));
		}

		if (counters.current === 0 || counters.current === counters.end) {
			setPlay(false);
		}
	};


	/**********************************************/
	/* ------------- MAP FUNCTIONS ---------------*/
	/**********************************************/
	
	const setNewMap = (svgRefCurrent) => {
		setMap(new WorldMap(svgRefCurrent));
	};

	const updateMap = () => {
		map.update(countryData, interval);
	};

	const clearMapData = () => {
		map.clearMap();
	};

	/**********************************************/
	/* ---------- SAVE/LOAD FUNCTIONS ------------*/
	/**********************************************/

	const saveCompositionState = (compositionTitle) => {
		const state = {
			query,
			dates,
			interval,
		};

		saveState(state, compositionTitle);
	};


	return (
		<div className='data-component'>
			<div className='data-component__left'>
				<MapWrapper
					countryData={countryData}
					map={map}
					setNewMap={setNewMap}
					updateMap={updateMap}
				/>
			</div>
			<div className='data-component__right'>
				<Sidebar
					allCountries={countries}
					countryData={countryData}
					noSynths={query.length}
					playButtonClick={playButtonClick}
					restart={restartCounter}
					clearMapData={clearMapData}
					dates={dates}
					setDates={setDates}
					interval={interval}
					setInterval={setInterval}
					countriesSelected={countriesSelected}
					setCountriesSelected={setCountriesSelected}
					setQuery={setQuery}
					saveComposition={saveCompositionState}
				/>
			</div>
		</div>
	);
}

export default DataComponent;
