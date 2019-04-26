import React from "react";
import "./App.css";

import Context from "./context";

import { LeftMenu } from "./main";
import { RightContent } from "./main";

class App extends React.Component {
	state = {
		com: "3d-scrolling",
		updateCom: v => {
			this.setState({
				com: v
			});
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				<div className="App">
					<LeftMenu />
					<RightContent />
				</div>
			</Context.Provider>
		);
	}
}

export default App;
