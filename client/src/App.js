import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import MapWrapper from './components/MapWrapper';
import useApplicationData from './hooks/useApplicationData';

import TopNav from './components/TopNav/TopNav';
import Sidebar from './components/SideBar/Sidebar';
import Register from './components/Register/Register';

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// const { state, dispatch } = useApplicationData();

	// const userList = state.users.map(user => (
	//   <li key={user.email}>
	//     {user.name} {user.email}
	//   </li>
	// ));

	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/register'>
						<Register />
					</Route>

					<Route path='/'>
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
