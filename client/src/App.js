import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';


import useApplicationData from './hooks/useApplicationData';

import TopNav from './components/TopNav/TopNav';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DataComponent from './components/DataComponent'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const { state, dispatch } = useApplicationData();

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
						<DataComponent countries={state.countries} />

					</Route>
				</Switch>
			</Router>
			</div>
		)

	
}

export default App;
