import React from "react";
import "./style.css";

export default class extends React.Component {
	render() {
		return (
			<div className="border-highlight-container">
				<div
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0
					}}
					onMouseOver={this.onHover}
					onMouseOut={this.offHover}
				/>
				{this.props.children}
				<div className="virtual-border bhl2 bhl2-border-top" />
				<div className="virtual-border bhl2 bhl2-border-bottom" />
				<div className="virtual-border bhl2 bhl2-border-left" />
				<div className="virtual-border bhl2 bhl2-border-right" />
			</div>
		);
	}

	onHover = e => {
		e.preventDefault();
		console.log("onHover");
	};

	offHover = e => {
		e.preventDefault();
		console.log("offHover");
	};
}
