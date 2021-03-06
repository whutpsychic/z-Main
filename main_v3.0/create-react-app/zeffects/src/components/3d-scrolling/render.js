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

//toBottom
const currComStartToBottomStyle = {
	transform: "rotateX(0deg)",
	top: 0
};

const currComEndToBottomStyle = {
	transform: "rotateX(-90deg)",
	top: "50%"
};

const nextComStartToBottomStyle = {
	transform: "rotateX(90deg)",
	top: "-50%"
};

const nextComEndToBottomStyle = {
	transform: "rotateX(0deg)",
	top: 0
};

//toLeft
const currComStartToLeftStyle = {
	transform: "rotateY(0deg)",
	left: 0
};

const currComEndToLeftStyle = {
	transform: "rotateY(90deg)",
	left: "-50%"
};

const nextComStartToLeftStyle = {
	transform: "rotateY(-90deg)",
	left: "50%"
};

const nextComEndToLeftStyle = {
	transform: "rotateY(0deg)",
	left: 0
};

//toRight
const currComStartToRightStyle = {
	transform: "rotateY(0deg)",
	left: 0
};

const currComEndToRightStyle = {
	transform: "rotateY(90deg)",
	left: "50%"
};

const nextComStartToRightStyle = {
	transform: "rotateY(-90deg)",
	left: "-50%"
};

const nextComEndToRightStyle = {
	transform: "rotateY(0deg)",
	left: 0
};

export default class extends React.Component {
	busy = false;
	direction = "top";

	state = {
		currMediaKey: 0,
		nextMediaKey: 1,
		imgs: [],
		currMediaStyle: {},
		nextMediaStyle: {}
	};

	componentDidMount() {
		//立即执行
		this.setState({
			imgs: this.props.children
		});
	}

	render() {
		const {
			currMediaKey,
			nextMediaKey,
			currMediaStyle,
			nextMediaStyle
		} = this.state;

		const { direction, busy } = this;

		let currStyle, nextStyle;

		switch (direction) {
			case "top":
				currStyle = currComStartToTopStyle;
				nextStyle = nextComStartToTopStyle;
				break;
			case "bottom":
				currStyle = currComStartToBottomStyle;
				nextStyle = nextComStartToBottomStyle;
				break;
			case "left":
				currStyle = currComStartToLeftStyle;
				nextStyle = nextComStartToLeftStyle;
				break;
			case "right":
				currStyle = currComStartToRightStyle;
				nextStyle = nextComStartToRightStyle;
				break;
			default:
				break;
		}

		const _transition = busy
			? { transition: timeout + "ms" }
			: { transition: "0s" };

		const _opacity = busy ? { opacity: 0 } : { opacity: 1 };

		return (
			<div className="scrolling-container">
				<div className="currMediaRender" style={_opacity}>
					{this.renderCurrMedia(currMediaKey)}
				</div>
				<div
					className="currMediaAnimator"
					style={{
						..._transition,
						...currStyle,
						...currMediaStyle
					}}
				>
					{this.renderCurrMedia(currMediaKey)}
				</div>
				<div
					className="nextMediaAnimator"
					style={{
						..._transition,
						...nextStyle,
						...nextMediaStyle
					}}
				>
					{this.renderNextMedia(nextMediaKey)}
				</div>
			</div>
		);
	}

	reset = () => {
		this.busy = false;
		this.updateKeys();
		this.setState({
			currMediaStyle: {},
			nextMediaStyle: {}
		});
	};

	//组件全局事件
	beforeTransition = () => {
		this.transition = true;
	};
	afterTransition = () => {
		setTimeout(() => {
			this.transition = false;
			this.updateKeys();
		}, timeout);
	};
	// **************

	//动画后检查media指针指向
	updateKeys = () => {
		const { imgs, currMediaKey, nextMediaKey } = this.state;
		const L = imgs.length;
		if (nextMediaKey + 1 >= L) {
			this.setState({
				currMediaKey: currMediaKey + 1,
				nextMediaKey: 0
			});
		} else if (currMediaKey + 1 >= L) {
			this.setState({
				currMediaKey: 0,
				nextMediaKey: 1
			});
		} else {
			this.setState({
				currMediaKey: currMediaKey + 1,
				nextMediaKey: nextMediaKey + 1
			});
		}
	};

	//类静态方法
	renderCurrMedia = currMediaKey => {
		const { imgs } = this.state;
		const com = imgs[currMediaKey];
		return com;
	};

	renderNextMedia = nextMediaKey => {
		const { imgs } = this.state;
		const com = imgs[nextMediaKey];
		return com;
	};

	animateToTop = () => {
		if (this.busy) return;

		this.busy = true;
		this.direction = "top";

		this.setState({
			currMediaStyle: currComEndToTopStyle,
			nextMediaStyle: nextComEndToTopStyle
		});

		//动画结束之后
		setTimeout(() => {
			this.reset();
		}, timeout);
	};

	animateToBottom = () => {
		if (this.busy) return;

		this.busy = true;
		this.direction = "bottom";

		this.setState({
			currMediaStyle: currComEndToBottomStyle,
			nextMediaStyle: nextComEndToBottomStyle
		});

		//动画结束之后
		setTimeout(() => {
			this.reset();
		}, timeout);
	};

	animateToLeft = () => {
		if (this.busy) return;

		this.busy = true;
		this.direction = "left";

		this.setState({
			currMediaStyle: currComEndToLeftStyle,
			nextMediaStyle: nextComEndToLeftStyle
		});

		//动画结束之后
		setTimeout(() => {
			this.reset();
		}, timeout);
	};

	animateToRight = () => {
		if (this.busy) return;

		this.busy = true;
		this.direction = "right";

		this.setState({
			currMediaStyle: currComEndToRightStyle,
			nextMediaStyle: nextComEndToRightStyle
		});

		//动画结束之后
		setTimeout(() => {
			this.reset();
		}, timeout);
	};
}
