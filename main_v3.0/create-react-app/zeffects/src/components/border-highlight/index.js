import React from "react";

import { Button } from "antd";

import Bhl from "./render";
import Bhl2 from "./render2";
import Bhl3 from "./render3";

export default class extends React.Component {
	render() {
		return (
			<div className="border-highlight">
			<p>描边效果</p>
				<Bhl>
					<Button onClick={this.clickBtn}>Hover me!</Button>
				</Bhl>
				<Bhl2>
					<button onClick={this.clickBtn}>Hover me!</button>
				</Bhl2>
				<Bhl3>
					<button onClick={this.clickBtn}>Hover me!</button>
				</Bhl3>
			</div>
		);
	}

	clickBtn = () => {
		console.log(111);
	};
}
