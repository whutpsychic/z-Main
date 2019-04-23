import React from "react";
import "./App.css";

import { Header, Footer, ReactLogo, Effects, Imitation } from "./UI-components";

class App extends React.Component {
	state = {
		showEffects: false
	};

	componentDidMount() {
		window.addEventListener("scroll", this.adjustViewByScroll);
	}

	//最外层
	render() {
		const {
			state: { showEffects }
		} = this;
		return (
			<div className="app-container">
				<Header />
				<ReactLogo />
				<Effects show={showEffects} />
				<Imitation />
				<Footer />
			</div>
		);
	}

	adjustViewByScroll = e => {
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
