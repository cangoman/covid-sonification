import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'

import Sidebar from './SideBar/Sidebar';
import MapWrapper from './MapWrapper';
import useInterval from '../hooks/useInterval'
import { createTimelineData, getNextDay } from '../helpers/DataFormatHelpers'


const BASE_URL = 'https://covid19-api.org/api/timeline/'


function DataComponent(props) {
  const { countries } = props;
  const [timelineData, setTimelineData] = useState([])

	//This will need to be selected by the user. and rn it causes a warning on the browser
	const query = ['colombia' , 'canada' /* , "mexico", 'brazil', "france" */]

	useEffect(() => {
		if (countries) {
			for (const country of query) {
				const regexp = new RegExp(country, 'i')
        const countryInfo = countries.find( element => element.name.match(regexp))
        
				if (countryInfo) {
					axios({
						method: 'GET',
						url: `${BASE_URL}${countryInfo.alpha2Code}`
					})
					.then(response => {
            const countryObject = createTimelineData(countryInfo, response.data)
						setTimelineData( timelineData => [...timelineData, countryObject] )
					})
				}
			}
		}
  }, [countries]);
  
  const [countryData, setCountryData] = useState([]);
  const [play, setPlay] = useState(true);
  const [counter, setCounter] = useState(5);
  let delay = 1000;
  
  useInterval(() => {
		if (play) {
      const data = getNextDay(timelineData, counter)
      setCountryData(data);
			setCounter(oldCount => oldCount - 1)
			if (counter === 1) {
				setPlay(false)
			}
		}	
	}, play ? delay : null) 



  return(
    <Container className='app-container' fluid>
    <Row>
      <Col xl={10}>
        <MapWrapper countryData={countryData} />
      </Col>
      <Col xl={2}>
        <Sidebar countryData={countryData}/>
      </Col>
    </Row>
  </Container>
  )
}




export default DataComponent;