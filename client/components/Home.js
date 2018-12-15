import React from 'react';
import Player from './Player';
import Sidebar from './Sidebar/Sidebar';


export const Home = () => {
	return (
		<div id='main'>
			<Player />
			<Sidebar />
		</div>
	)
}

export default Home;
