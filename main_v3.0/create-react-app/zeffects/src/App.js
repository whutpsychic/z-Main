import React from "react";
import "./App.css";

import { LeftMenu } from "./main";
import { RightContent } from "./main";

import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<LeftMenu />
					<RightContent />
				</div>
			</Router>
		);
	}
}

export default App;
