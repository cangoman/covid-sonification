import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import useApplicationData from './hooks/useApplicationData';

import TopNav from './components/TopNav/TopNav';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DataComponent from './components/DataComponent';
import UserDashboard from './components/UserDashboard/UserDashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	const { state, dispatch } = useApplicationData();

	return (
		<div className='App'>
			<Router>
				<TopNav />
				<Switch>
					<Route exact path='/register'>
						<Register />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/users/:id'>
						<UserDashboard />
					</Route>

					<Route path='/compositions/:id'>
						<DataComponent countries={state.countries} />
					</Route>
					<Route exact path='/'>
						<DataComponent countries={state.countries} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
