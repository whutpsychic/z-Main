import React from "react";
import "./style.css";

//全局控制设置
const timeout = 1200;

//动效值组
//toTop
const currComStartToTopStyle = {
	transform: "rotateX(0deg)",
	top: 0
};

const currComEndToTopStyle = {
	transform: "rotateX(90deg)",
	top: "-50%"
};

const nextComStartToTopStyle = {
	transform: "rotateX(-90deg)",
	top: "50%"
};

const nextComEndToTopStyle = {
	transform: "rotateX(0deg)",
	top: 0
};

export default class extends React.Component {
	transition = false;
	state = {
		img1: null,
		img2: null,
		currMediaStyle: {},
		nextMediaStyle: {}
	};

	render() {
		const { img1, img2, currMediaStyle, nextMediaStyle } = this.state;

		const {
			transition,
			props: { medias }
		} = this;

		const _transitionStyle = {
			transition: "1200ms"
		};

		return (
			<div className="scrolling-container">
				<div
					style={{
						..._transitionStyle,
						...currComStartToTopStyle,
						...currMediaStyle
					}}
				>
					{img1}
				</div>
				<div
					style={{
						..._transitionStyle,
						...nextComStartToTopStyle,
						...nextMediaStyle
					}}
				>
					{img2}
				</div>
			</div>
		);
	}

	animate = (m1, m2) => {
		//忙碌判断
		if (this.transition) return;
		this.transition = true;

		return new Promise(resolve => {
			this.setState({
				img1: m1,
				img2: m2,
				currMediaStyle: currComEndToTopStyle,
				nextMediaStyle: nextComEndToTopStyle
			});
			setTimeout(() => {
				this.transition = false;
				resolve();
			}, timeout);
		});
	};
}
