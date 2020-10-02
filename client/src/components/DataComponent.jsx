import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './SideBar/Sidebar';
import MapWrapper from './MapWrapper';
import useInterval from '../hooks/useInterval'
import { createTimelineData, createDailyData, getDateIndices, getDateIndex } from '../helpers/DataFormatHelpers'


import WorldMap from '../d3/WorldMap';

import './DataComponent.scss';
import { StateTimeline } from 'tone';

const BASE_URL = 'https://covid19-api.org/api/timeline/';

function DataComponent(props) {
	const { countries } = props;
	const [timelineData, setTimelineData] = useState([]);
	const [dailyData, setDailyData] = useState([]);
	const [play, setPlay] = useState(false);
	const [countryData, setCountryData] = useState([]);
	const [dates, setDates] = useState({
    startDate: null,
    endDate: null
  });

  const [counters, setCounters] = useState({
    start: null,
    current: null,
    end: null
  })

	const [interval, setInterval] = useState(2000); //This may need to come from a parent component...sets the amount of time corresponding to a day

	// state for MapWrapper.js
	const [map, setMap] = useState(null);

	//This will need to be selected by the user. and rn it causes a warning on the browser
	const query = [
		'china',
		'mexico',
		'united states of america',
		'brazil',
		'france',
		'spain',
		'morocco',
		'australia',
	];

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

	useEffect(() => {
		if (timelineData.length !== 0) {
			setDailyData(createDailyData(timelineData));
		}
	}, [timelineData]);

	useEffect(() => {
    const startIndex = getDateIndex(dates.startDate);
    const endIndex = getDateIndex(dates.endDate)
    setCounters(prev => ({current: startIndex, start: startIndex , end: endIndex }) )
  }, [dates])
  


	useInterval(
		() => {
			if (play) {
				const data = dailyData[counters.current];
				setCountryData(data);
        advanceCounter()
				// if (counter === 1) {
				// 	setPlay(false);
				// }
			}
		},
		play ? interval : null
  );
  
  const advanceCounter = () => {
    if (counters.start > counters.end) {
      setCounters( prev => ({...prev, current: prev.current - 1}))
    } else if (counters.start < counters.end) {
      setCounters( prev => ({...prev, current: prev.current + 1}))
    } 
    // else {
    //   setPlay(false)
    // }
    if (counters.current === 0 || counters.current === counters.end) {
      setPlay(false)
    }
  }

	// const dataProcessing = () => {
	//     console.log("Inside the dataProcessing function")
	//     const data = dailyData[counter]
	//     if (data) {
	//       setCountryData(data);
	//       setDate(data[0]['date'])
	//     }
	//     setCounter(oldCount => oldCount - 1)
	//     if (counter === 1) {
	//       setPlay(false)
	//       Tone.Transport.stop()
	//   }
	// }

	// useEffect(() => {
	//   Tone.Transport.bpm.value = 60;
	//   if (timelineData && play)
	//   Tone.Transport.scheduleRepeat(() => {
	//     dataProcessing();

	//   }, "4n", '1m')
	// }, [timelineData, play])

  

	const playButtonClick = () => {
		if (counters.current === 0 || !counters.current ) return;
		setPlay((prev) => !prev);
	};

	const restartCounter = () => {
		setCounters( prev => ({ ...prev, current: prev.start}));
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
					countryData={countryData}
					noSynths={query.length}
					playButtonClick={playButtonClick}
					restart={restartCounter}
          clearMapData={clearMapData}
          dates={dates}
          setDates={setDates}
				/>
			</div>
		</div>
	);
}

export default DataComponent;
