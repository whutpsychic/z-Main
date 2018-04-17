
import React, { Component } from 'react';

import { TopBar } from './views';
import { Menu } from './views';

import Routes from './Routes.js';

class App extends Component {

	//designer
	render() {
		return (
			<div>
				<TopBar />
				<Menu />
				<div className="main-contents">
					<Routes />
				</div>
			</div>
		)
	}
}

export default App;
