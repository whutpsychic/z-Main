import React from "react";
import "./App.css";

import { Header, Footer, ReactLogo, Effects } from "./UI-components";

class App extends React.Component {
	state = {
		showEffects: false
	};

	componentDidMount() {
		window.addEventListener("scroll", this.adjustViewByScroll);
	}

	render() {
		const {
			state: { showEffects }
		} = this;
		return (
			<div className="app-container">
				<Header />
				<ReactLogo />
				<Effects show={showEffects} />
				<Footer />
			</div>
		);
	}

	adjustViewByScroll = e => {
		console.log(window.scrollY)
		if (window.scrollY > 50)
			this.setState({
				showEffects: true
			});
		else {
			this.setState({
				showEffects: false
			});
		}
	};
}

export default App;
