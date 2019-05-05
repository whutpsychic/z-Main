import React from "react";
import "./style.css";

export default class extends React.Component {
	render() {
		return (
			<div className="border-highlight-container">
				{this.props.children}
				<div className="virtual-border bhl-border-top" />
				<div className="virtual-border bhl-border-bottom" />
				<div className="virtual-border bhl-border-left" />
				<div className="virtual-border bhl-border-right" />
			</div>
		);
	}
}
