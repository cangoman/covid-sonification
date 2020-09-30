import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'

import Sidebar from './SideBar/Sidebar';
import MapWrapper from './MapWrapper';

const BASE_URL = 'https://covid19-api.org/api/timeline/'


function DataComponent({countries}) {

  const [timelineData, setTimelineData] = useState([])

	//This will need to be selected by the user. and rn it causes a warning on the browser
	const query = ['colombia', 'canada', "mexico", 'brazil', "france"]

	useEffect(() => {
		if (countries) {
			for (const country of query) {
				const regexp = new RegExp(country, 'i')
				const countryInfo = countries.find( element => element.name.match(regexp))
				// console.log(countryInfo)
				if (countryInfo) {
					axios({
						method: 'GET',
						url: `${BASE_URL}${countryInfo.alpha2Code}`
					})
					.then(response => {
						const countryObject = {countryInfo, data: response.data}
						setTimelineData( timelineData => [...timelineData, countryObject] )
					})
				}
			}
		}
	}, [countries]);





  return(
    <Container className='app-container' fluid>
    <Row>
      <Col xl={10}>
        <MapWrapper data={timelineData} />
      </Col>
      <Col xl={2}>
        <Sidebar />
      </Col>
    </Row>
  </Container>
  )
}




export default DataComponent;