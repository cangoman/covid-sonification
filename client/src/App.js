import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import MapWrapper from './components/MapWrapper';
import useApplicationData from './hooks/useApplicationData';
// import useCountryData from './hooks/useCountryData'

import TopNav from './components/TopNav/TopNav';
import Sidebar from './components/SideBar/Sidebar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const BASE_URL = 'https://covid19-api.org/api/timeline/';

function App() {
	const { state, dispatch } = useApplicationData();

	const [timelineData, setTimelineData] = useState([]);

	//This will need to be selected by the user. and rn it causes a warning on the browser
	const query = ['colombia', 'canada', 'mexico', 'brazil', 'france'];

	useEffect(() => {
		if (state.countries) {
			for (const country of query) {
				const regexp = new RegExp(country, 'i');
				const countryInfo = state.countries.find((element) =>
					element.name.match(regexp)
				);
				// console.log(countryInfo)
				if (countryInfo) {
					axios({
						method: 'GET',
						url: `${BASE_URL}${countryInfo.alpha2Code}`,
					}).then((response) => {
						const countryObject = { countryInfo, data: response.data };
						setTimelineData((timelineData) => [...timelineData, countryObject]);
					});
				}
			}
		}
	}, [state.countries]);

	return (
		<div className='App'>
			<TopNav />
			<Router>
				<Switch>
					<Route exact path='/register'>
						<Register />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/'>
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
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
