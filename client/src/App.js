import React from 'react';
import './App.css';

import MapWrapper from './components/MapWrapper';
import useApplicationData from './hooks/useApplicationData';

import TopNav from './components/TopNav/TopNav';
import Sidebar from './components/SideBar/Sidebar';

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
		</div>
	);
}

export default App;
