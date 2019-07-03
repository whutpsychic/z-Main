import React from "react";
import "./style.css";

export default class extends React.Component {
	state = {
		key: null,
		cYdeg1: 45,
		cYdeg2: 45
	};

	componentDidMount() {}

	render() {
		const { key, cYdeg1, cYdeg2 } = this.state;
		return (
			<section className="sd-rotarydisplay">
				<div className="tk" onClick={this.clickbtn}>
					{key ? "停止旋转" : "开始旋转"}
				</div>
				<div className="dbrect-container">
					<div
						className="rect-container rect1"
						style={{
							transform: `rotateX(30deg) rotateY(` + cYdeg1 + `deg)`
						}}
					>
						<div className="surface s1" />
						<div className="surface s2" />
						<div className="surface s3" />
						<div className="surface s4" />
						<div className="surface s5" />
						<div className="surface s6" />
					</div>
					<div
						className="rect-container rect2"
						style={{
							transform: `rotateX(30deg) rotateY(` + cYdeg2 + `deg)`
						}}
					>
						<div className="surface s1" />
						<div className="surface s2" />
						<div className="surface s3" />
						<div className="surface s4" />
						<div className="surface s5" />
						<div className="surface s6" />
					</div>
				</div>
			</section>
		);
	}

	clickbtn = () => {
		const { key } = this.state;
		if (!key) this.letitrotate();
		else {
			window.clearInterval(key);
			this.setState({
				key: null
			});
		}
	};

	letitrotate = () => {
		let _key = setInterval(() => {
			this.setState({
				cYdeg1: this.state.cYdeg1 + 90,
				cYdeg2: this.state.cYdeg2 - 90
			});
		}, 2000);

		this.setState({
			key: _key
		});
	};
}
