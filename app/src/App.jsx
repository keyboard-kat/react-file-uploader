import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UploadContainer from './Components/UploaderContainer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={() => <UploadContainer />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
