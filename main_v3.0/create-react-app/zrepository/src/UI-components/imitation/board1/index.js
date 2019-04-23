import React from "react";
import "./style.css";
import Img from "./b1.jpg";

export default class extends React.Component {
	render() {
		return (
			<div className="board-content B1">
				<img alt={"版面1"} src={Img} />
			</div>
		);
	}
}
