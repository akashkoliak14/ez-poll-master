import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Vote from './components/Vote';
import Result from './components/Result';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './Login';
import Registration from './components/Registration';
function App() {	
	return (
		<BrowserRouter>
			<div>
				<Navigation/>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/vote' component={Vote} />
					<Route path='/results' component={Result} />
					<Route path='/Login' component={Login} />
					<Route path='/Registration' component={Registration} />
					<Route component={Error} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
