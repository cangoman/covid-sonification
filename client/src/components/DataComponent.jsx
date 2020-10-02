import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Sidebar from './SideBar/Sidebar';
import MapWrapper from './MapWrapper';
import useInterval from '../hooks/useInterval'
import { createTimelineData, createDailyData, getDateIndices } from '../helpers/DataFormatHelpers'


import WorldMap from '../d3/WorldMap';

const BASE_URL = 'https://covid19-api.org/api/timeline/';

function DataComponent(props) {
  const { countries } = props;
  const [timelineData, setTimelineData] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [play, setPlay] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [date, setDate] = useState(null);


  const initialCounter = 250;
  const [counter, setCounter] = useState(initialCounter);
  const [interval, setInterval] = useState(2000); //This may need to come from a parent component...sets the amount of time corresponding to a day

	// state for MapWrapper.js
	const [map, setMap] = useState(null);


	//This will need to be selected by the user. and rn it causes a warning on the browser
	const query = ['china', 'mexico' ,  "united states of america", 'brazil',  "france", 'spain', 'morocco', 'australia' ]

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
      setDailyData(createDailyData(timelineData))
    }
  }, [timelineData])

  useEffect(() => {
    console.log("dailyData: ",dailyData)
    const indices = getDateIndices(['2020-06-05', '2020-06-17'])
    console.log("Does this correspont to june 5 and june 17?: ", dailyData[indices[0]], dailyData[indices[1]])

  }, [dailyData])

  
  useInterval(() => {
        if (play) {
          const data = dailyData[counter]
          // console.log("new data, daydata: ", daydata)
          // const data = getNextDay(timelineData, counter)
          // console.log("old data, from get next day", data)
          setCountryData(data);
          setDate(data[0].date)
          setCounter(oldCount => oldCount - 1)
          if (counter === 1) {
            setPlay(false)
          }
        }	
  }, play ? interval : null) 
  
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
						// date={date}
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
