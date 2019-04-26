import React from "react";
import "./style.css";
import logo from "./logo.svg";

export default class extends React.Component {
	render() {
		return (
			<section className="react-logo">
				<img alt={"logo"} src={logo} />
				<p>React</p>
				<p>A popular UI repository for JavaScript</p>
				<a href="https://reactjs.org/">Official Web Page Entrance</a>
			</section>
		);
	}
}
