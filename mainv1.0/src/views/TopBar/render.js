import React, { Component } from 'react';

import Translator from './Translator.js';
import JumperContainer from './JumperContainer.js';

class TopBar extends Component {

	render() {
	
		return (
			<div className="top-bar">
				<Translator />
				<JumperContainer />
			</div>
		)
	}

}

export default TopBar;