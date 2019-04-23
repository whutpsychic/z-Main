import React from "react";
import { Animate } from "react-move";
import { easeCubicIn, easeCubicOut } from "d3-ease";

export default class extends React.Component {
	render() {
		const { show } = this.props;
		return (
			<div className="addons1">
				<Animate
					show={show}
					start={{ opacity: 0, left: 8 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 200, duration: 400, ease: easeCubicIn }
						},
						{
							left: [20],
							timing: { duration: 400, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [0],
							timing: { duration: 200, ease: easeCubicIn }
						},
						{
							left: [8],
							timing: { duration: 200, ease: easeCubicIn }
						}
					]}
				>
					{({ opacity, left }) => {
						return <p style={{ opacity, left: left + "%" }}>HIGH-END</p>;
					}}
				</Animate>
				<Animate
					show={show}
					start={{ opacity: 0, right: 50 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 500, duration: 400, ease: easeCubicIn }
						},
						{
							right: [62],
							timing: { delay: 300, duration: 400, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [0],
							timing: { duration: 200, ease: easeCubicIn }
						},
						{
							right: [50],
							timing: { duration: 200, ease: easeCubicIn }
						}
					]}
				>
					{({ opacity, right }) => {
						return <p style={{ opacity, right: right + "%" }}>QUALITY</p>;
					}}
				</Animate>
			</div>
		);
	}
}
