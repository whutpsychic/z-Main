import React from "react";
import "./style.css";
import logo from "./logo.svg";
import { Animate } from "react-move";
import { easeCubicIn, easeCubicOut } from "d3-ease";

export default class extends React.Component {
	shouldComponentUpdate(prev, next) {
		console.log(prev);
		console.log(next);
		console.log(window.scrollY);

		return true;
	}

	render() {
		const { show } = this.props;

		return (
			<section className="effects-section-skeleton">
				<Animate
					show={show}
					start={{
						opacity: 0,
						top: 40
					}}
					enter={[
						{
							opacity: [1],
							timing: { delay: 100, duration: 200, ease: easeCubicIn }
						},
						{
							top: [0],
							timing: { duration: 300, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [0],
							timing: { duration: 200, ease: easeCubicOut }
						},
						{
							top: [80],
							timing: { duration: 200, ease: easeCubicIn }
						}
					]}
				>
					{({ opacity, top }) => {
						return (
							<section
								className="effects-section"
								style={{ opacity, top: top + "px" }}
							>
								<p>特效大师</p>
								<div className="introduce-part">
									<img alt="介绍图标" src={logo} />
									<p>HTML5</p>
									<p>CSS3</p>
									<p>Canvas</p>
								</div>
								<div className="introduce-part">
									<img alt="介绍图标" src={logo} />
									<p>丝滑 流畅</p>
									<p>自然 高效</p>
									<p>精致 高端</p>
								</div>
								<div className="introduce-part">
									<img alt="介绍图标" src={logo} />
									<p>Ant-design</p>
									<p>React-move</p>
									<p>D3-ease</p>
								</div>
							</section>
						);
					}}
				</Animate>
			</section>
		);
	}
}
