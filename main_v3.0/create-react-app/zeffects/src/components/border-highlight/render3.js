import React from "react";
import "./style.css";

//配置项
//单边时长(ms)
const transitionTime = 400;

export default class extends React.Component {
	state = {
		topStyle: {},
		rightStyle: {},
		bottomStyle: {},
		leftStyle: {}
	};

	render() {
		const { topStyle, rightStyle, bottomStyle, leftStyle } = this.state;

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
				<div className="virtual-border bhl3 bhl3-border-top" style={topStyle} />
				<div
					className="virtual-border bhl3 bhl3-border-right"
					style={rightStyle}
				/>
				<div
					className="virtual-border bhl3 bhl3-border-bottom"
					style={bottomStyle}
				/>
				<div
					className="virtual-border bhl3 bhl3-border-left"
					style={leftStyle}
				/>
			</div>
		);
	}

	onHover = e => {
		e.preventDefault();
		this.drawBorder();
	};

	offHover = e => {
		e.preventDefault();
		this.earaseBorder();
	};

	drawBorder = () => {
		const { topStyle, rightStyle, bottomStyle, leftStyle } = this.state;
		this.setState({
			topStyle: { ...topStyle, transitionDelay: 0 * transitionTime + "ms" },
			rightStyle: { ...rightStyle, transitionDelay: 1 * transitionTime + "ms" },
			bottomStyle: {
				...bottomStyle,
				transitionDelay: 2 * transitionTime + "ms"
			},
			leftStyle: { ...leftStyle, transitionDelay: 3 * transitionTime + "ms" }
		});
	};

	earaseBorder = () => {
		const { topStyle, rightStyle, bottomStyle, leftStyle } = this.state;
		this.setState({
			topStyle: { ...topStyle, transitionDelay: 3 * transitionTime + "ms" },
			rightStyle: { ...rightStyle, transitionDelay: 2 * transitionTime + "ms" },
			bottomStyle: {
				...bottomStyle,
				transitionDelay: 1 * transitionTime + "ms"
			},
			leftStyle: { ...leftStyle, transitionDelay: 0 * transitionTime + "ms" }
		});
	};
}
