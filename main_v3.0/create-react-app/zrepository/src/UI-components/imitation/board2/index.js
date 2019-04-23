import React from "react";
import "./style.css";
import Img from "./b2.jpg";

export default class extends React.Component {
	render() {
		return (
			<div className="board-content B1">
				<img alt={"版面2"} src={Img} />
			</div>
		);
	}
}
