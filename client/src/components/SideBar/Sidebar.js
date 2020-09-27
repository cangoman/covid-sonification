import React from 'react';

import DataCard from './DataCard';

import './SideBar.scss';

function Sidebar() {
	return (
		<div>
			<h1>Sidebar</h1>
			<DataCard />
			<DataCard />
		</div>
	);
}

export default Sidebar;
