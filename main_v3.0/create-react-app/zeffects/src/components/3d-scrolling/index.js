import React from "react";
import Render from "./render";

import { Button } from "antd";

import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
// import pic3 from "./pic3.jpg";

export default class extends React.Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<div className="scrolling-3d">
				<p>3D 滚动效果（换向有bug）</p>
				<div className="operation-bar">
					<Button onClick={this.clickToTop}>向上滚动</Button>
					<Button onClick={this.clickToBottom}>向下滚动</Button>
					<Button onClick={this.clickToLeft}>向左滚动</Button>
					<Button onClick={this.clickToRight}>向右滚动</Button>
				</div>
				<Render ref="com">
					<img alt={"jksdafkl"} src={pic1} />
					<img alt={"jksdafkl"} src={pic2} />
				</Render>
			</div>
		);
	}

	clickToTop = () => {
		this.refs.com.animateToTop();
	};

	clickToBottom = () => {
		this.refs.com.animateToBottom();
	};

	clickToLeft = () => {
		this.refs.com.animateToLeft();
	};

	clickToRight = () => {
		this.refs.com.animateToRight();
	};
}
