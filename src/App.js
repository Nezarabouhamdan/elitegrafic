import React from 'react';
import { Globalstyle } from './Globalstyles';
import { BrowserRouter ,Switch,Rotue, Route } from 'react-router-dom';
import Home from './Page/Home';
import Navbar from './components/Navbar/Navbar';

import './fonts/RedThinker-Light.ttf';

function App() {
	return <BrowserRouter>
	<Globalstyle/>
  <Navbar/>
	<switch>
	<Route exact path="/" component={Home}></Route>

	</switch>
	</BrowserRouter>;
}

export default App;