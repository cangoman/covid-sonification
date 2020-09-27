import React from 'react';
import './App.css';

import MapWrapper from './components/MapWrapper'
import useApplicationData from './hooks/useApplicationData';

function App() {

  // const { state, dispatch } = useApplicationData();

  // const userList = state.users.map(user => (
  //   <li key={user.email}>
  //     {user.name} {user.email}
  //   </li>
  // ));

  return (
    <div className='App'>
      <MapWrapper />
    </div>
  );
}

export default App;
