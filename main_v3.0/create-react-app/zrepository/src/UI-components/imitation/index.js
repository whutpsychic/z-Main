import React from "react";
import "./style.css";

import { Carousel } from "antd";
import Board1 from "./board1";
import Board2 from "./board2";
import Board3 from "./board3";

import Addons1 from "./addons1";
import Addons2 from "./addons2";
import Addons3 from "./addons3";

export default class extends React.Component {
	state = {
		showAddons0: false,
		showAddons1: false,
		showAddons2: false,
		currentAddons: 0
	};

	componentDidMount() {}

	render() {
		const {
			state: { currentAddons }
		} = this;

		return (
			<section className="imitation-section">
				<Carousel
					ref="carousel"
					beforeChange={this.removeAddons}
					afterChange={this.afterChangeCarousel}
				>
					<Board1 />
					<Board2 />
					<Board3 />
				</Carousel>
				<div className="addons">{this.renderCurrentAddons()}</div>
			</section>
		);
	}

	removeAddons = () => {
		this.setState({
			showAddons0: false,
			showAddons1: false,
			showAddons2: false
		});
	};

	afterChangeCarousel = curr => {
		switch (curr) {
			case 0:
				this.setState({
					showAddons0: true,
					currentAddons: curr
				});
				return;
			case 1:
				this.setState({
					showAddons1: true,
					currentAddons: curr
				});
				return;
			case 2:
				this.setState({
					showAddons2: true,
					currentAddons: curr
				});
				return;
		}
	};

	renderCurrentAddons = () => {
		const {
			state: { currentAddons, showAddons0, showAddons1, showAddons2 }
		} = this;

		switch (currentAddons) {
			case 0:
				return <Addons1 show={showAddons0} />;
			case 1:
				return <Addons2 show={showAddons1} />;
			case 2:
				return <Addons3 show={showAddons2} />;
			default:
				return <div />;
		}
	};
}
