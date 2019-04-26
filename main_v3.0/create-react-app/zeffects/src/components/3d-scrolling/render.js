import React from "react";
import "./style.css";

const currComStartToLeftStyle = {
	transform: "rotateY(0deg)",
	left: 0
};

const currComEndToLeftStyle = {
	transform: "rotateY(90deg)",
	left: "50%"
};

const nextComStartToLeftStyle = {
	transform: "rotateY(-90deg)",
	left: "50%"
};

const nextComEndToLeftStyle = {
	transform: "rotateY(0deg)",
	left: 0
};

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
	bottom: "-50%"
};

const nextComStartToBottomStyle = {
	transform: "rotateX(90deg)",
	bottom: "100%"
};

const nextComEndToBottomStyle = {
	transform: "rotateX(0deg)",
	bottom: 0
};

export default class extends React.Component {
	transition = false;
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
			imgs,
			currMediaKey,
			nextMediaKey,
			currMediaStyle,
			nextMediaStyle
		} = this.state;

		const { direction, transition } = this;

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
		}
		const _transitionStyle = transition
			? { transition: 0 }
			: { transition: "1.2s" };

		console.log(currStyle);
		console.log(nextStyle);

		return (
			<div className="scrolling-container">
				<div
					className="currMedia"
					style={{ ..._transitionStyle, ...currStyle, ...currMediaStyle }}
				>
					{this.renderCurrMeida(currMediaKey)}
				</div>
				<div
					className="nextMedia"
					style={{ ..._transitionStyle, ...nextStyle, ...nextMediaStyle }}
				>
					{this.renderNextMedia(nextMediaKey)}
				</div>
			</div>
		);
	}

	checkNext = () => {
		const { imgs, currMediaKey, nextMediaKey } = this.state;
		setTimeout(() => {
			if (nextMediaKey + 1 >= imgs.length) {
				this.setState({
					currMediaKey: currMediaKey + 1,
					nextMediaKey: 0
				});
			} else {
				this.setState({
					currMediaKey: currMediaKey + 1,
					nextMediaKey: nextMediaKey + 1
				});
			}
		}, 1200);
	};

	renderCurrMeida = currMediaKey => {
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
		this.direction = "top";
		this.setState({
			currMediaStyle: currComEndToTopStyle,
			nextMediaStyle: nextComEndToTopStyle
		});
		// this.checkNext();
	};

	animateToBottom = () => {
		this.direction = "bottom";
		this.setState({
			currMediaStyle: currComEndToBottomStyle,
			nextMediaStyle: nextComEndToBottomStyle
		});
		// this.checkNext();
	};

	animateToRight = () => {
		this.setState({
			currMediaStyle: currComEndToLeftStyle,
			nextMediaStyle: nextComEndToLeftStyle

			// currMediaStyle: nextComEndToLeftStyle,
			// nextMediaStyle: currComEndToLeftStyle
		});
	};
}
