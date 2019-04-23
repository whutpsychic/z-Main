import React from "react";
import { Animate } from "react-move";
import { easeCubicIn, easeCubicOut } from "d3-ease";

export default class extends React.Component {
	render() {
		const { show } = this.props;
		return (
			<div className="addons3">
				<Animate
					show={show}
					start={{ opacity: 0, top: 8 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 200, duration: 400, ease: easeCubicIn }
						},
						{
							top: [0],
							timing: { duration: 400, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [0],
							timing: { duration: 200, ease: easeCubicOut }
						},
						{
							top: [8],
							timing: { duration: 200, ease: easeCubicOut }
						}
					]}
				>
					{({ opacity, top }) => {
						return <p style={{ opacity, top: top + "%" }}>CUSTOM</p>;
					}}
				</Animate>
				<Animate
					show={show}
					start={{ opacity: 0, top: 20 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 500, duration: 400, ease: easeCubicIn }
						},
						{
							top: [8],
							timing: { delay: 300, duration: 400, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [0],
							timing: { duration: 200, ease: easeCubicOut }
						},
						{
							top: [8],
							timing: { duration: 200, ease: easeCubicOut }
						}
					]}
				>
					{({ opacity, top }) => {
						return <p style={{ opacity, top: top + "%" }}>ADAPTATION</p>;
					}}
				</Animate>
				<Animate
					show={show}
					start={{ opacity: 0, left: 1 }}
					enter={[
						{
							opacity: [1],
							timing: { delay: 600, duration: 600, ease: easeCubicIn }
						},
						{
							left: [16],
							timing: { delay: 400, duration: 600, ease: easeCubicIn }
						}
					]}
					leave={[
						{
							opacity: [0],
							timing: { duration: 200, ease: easeCubicOut }
						},
						{
							left: [1],
							timing: { duration: 200, ease: easeCubicOut }
						}
					]}
				>
					{({ opacity, left }) => {
						return <p style={{ opacity, left: left + "%" }}>EASY TO USE</p>;
					}}
				</Animate>
			</div>
		);
	}
}
