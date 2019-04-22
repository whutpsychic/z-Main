import React from "react";
import "./style.css";
import logo from "./logo.svg";

export default class extends React.Component {
	render() {
		const { show } = this.props;

		//动画特效组(CSS)
		const easeCubicIn = {
			transitionDuration: ".6s",
			transitionTimingFunction: "cubic-bezier(.075, .82, .165, 1)"
		};

		const easeCubicOut = {
			transitionDuration: ".6s",
			transitionTimingFunction: "cubic-bezier(.075, .82, .165, 1)"
		};

		const showingStyle = {
			opacity: 1,
			top: 0
		};

		const hidingStyle = {
			opacity: 0,
			top: "60px"
		};

		const animation = show
			? Object.assign({}, easeCubicIn, showingStyle)
			: Object.assign({}, easeCubicOut, hidingStyle);

		const transitionDelayItem1 = show
			? Object.assign({}, easeCubicIn, showingStyle, { transitionDelay: ".3s" })
			: Object.assign({}, easeCubicOut, hidingStyle);
		const transitionDelayItem2 = show
			? Object.assign({}, easeCubicIn, showingStyle, { transitionDelay: ".45s" })
			: Object.assign({}, easeCubicOut, hidingStyle);
		const transitionDelayItem3 = show
			? Object.assign({}, easeCubicIn, showingStyle, { transitionDelay: ".6s" })
			: Object.assign({}, easeCubicOut, hidingStyle);

		return (
			<section className="effects-section-skeleton">
				<section className="effects-section" style={animation}>
					<p>特效大师</p>
					<div className="introduce-part" style={transitionDelayItem1}>
						<img alt="介绍图标" src={logo} />
						<p>HTML5</p>
						<p>CSS3</p>
						<p>Canvas</p>
					</div>
					<div className="introduce-part" style={transitionDelayItem2}>
						<img alt="介绍图标" src={logo} />
						<p>丝滑 流畅</p>
						<p>自然 高效</p>
						<p>精致 高端</p>
					</div>
					<div className="introduce-part" style={transitionDelayItem3}>
						<img alt="介绍图标" src={logo} />
						<p>Ant-design</p>
						<p>React-move</p>
						<p>D3-ease</p>
					</div>
				</section>
			</section>
		);
	}
}
