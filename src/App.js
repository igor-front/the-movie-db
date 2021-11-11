import React from 'react';

import  './index.css'
import {Switch, Route} from "react-router-dom";
import Favourite from "./Favourite";
import Popular from "./Popular";
import Navbar from "./Navbar";
import TvShows from "./TvShows";
const App = () => {

	return (
		<>
			<Navbar/>

		<Switch>
			<Route path='/' exact render={()=> <Favourite/>}/>
			<Route path='/popular' render={()=> <Popular/>}/>
			<Route path='/tvshows' render={()=> <TvShows/>}/>
		</Switch>
		</>
	);
};

export default App;
