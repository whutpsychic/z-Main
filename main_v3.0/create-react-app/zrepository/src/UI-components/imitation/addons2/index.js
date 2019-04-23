import React from "react";
import { Animate } from "react-move";
import { easeCubicIn, easeCubicOut } from "d3-ease";

export default class extends React.Component {
	render() {
		const { show } = this.props;
		return (
			<div className="addons2">
				<Animate
					show={show}
					start={{ opacity: 0, bottom: -14 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 200, duration: 400, ease: easeCubicIn }
						},
						{
							bottom: [-8],
							timing: { duration: 400, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [-14],
							timing: { duration: 200, ease: easeCubicIn }
						},
						{
							bottom: [0],
							timing: { duration: 200, ease: easeCubicIn }
						}
					]}
				>
					{({ opacity, bottom }) => {
						return <p style={{ opacity, bottom: bottom + "%" }}>AESTHETICSM</p>;
					}}
				</Animate>
				<Animate
					show={show}
					start={{ opacity: 0, top: -8 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 500, duration: 400, ease: easeCubicIn }
						},
						{
							top: [0],
							timing: { delay: 300, duration: 400, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [-14],
							timing: { duration: 200, ease: easeCubicIn }
						},
						{
							top: [-8],
							timing: { duration: 200, ease: easeCubicIn }
						}
					]}
				>
					{({ opacity, top }) => {
						return <p style={{ opacity, top: top + "%" }}>DELICATELY</p>;
					}}
				</Animate>
			</div>
		);
	}
}
