import React from 'react';
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

function App() {
	const { state, dispatch } = useApplicationData();
	// useCountryData();

	// const userList = state.users.map(user => (
	//   <li key={user.email}>
	//     {user.name} {user.email}
	//   </li>
	// ));

	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/register'>
						<Register />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/'>
						<TopNav />
						<Container className='app-container' fluid>
							<Row>
								<Col xl={10}>
									<MapWrapper />
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
