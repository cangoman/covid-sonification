import React from 'react';
import './App.css';

import MapWrapper from './components/MapWrapper';
import useApplicationData from './hooks/useApplicationData';
import TopNav from './components/TopNav';

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
			<MapWrapper />
		</div>
	);
}

export default App;
