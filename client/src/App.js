import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';
import TopNav from './components/TopNav/TopNav';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DataComponent from './components/DataComponent';
import UserDashboard from './components/UserDashboard/UserDashboard';
import About from './components/About/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	const { state /* dispatch */ } = useApplicationData();

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

					<Route exact path='/about'>
						<About />
					</Route>

					<Route path='/users/:id'>
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
