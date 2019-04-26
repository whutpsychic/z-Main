import React from "react";
import "./style.css";
import Context from "../../context";

export default class extends React.Component {
	state = {
		CurrentCom: null
	};

	// shouldComponentUpdate(prevProps, nextState, nextProps) {
	// 	return nextState.CurrentCom !== this.state.CurrentCom;
	// }

	render() {
		const { CurrentCom } = this.state;

		return (
			<div className="right-content">
				<Context.Consumer>
					{({ com }) => {
						this.renderComponent(com);
						if (CurrentCom) return <CurrentCom />;
						return <div className="404" />;
					}}
				</Context.Consumer>
			</div>
		);
	}
	renderComponent = com => {
		const { CurrentCom } = this.state;

		switch (com) {
			case "3d-scrolling":
				import("../../components/3d-scrolling/index.js").then(m => {
					const currentCom = m.default;
					if (CurrentCom !== currentCom)
						this.setState({ CurrentCom: currentCom });
				});
				return;
			/* falls through */
			case "border-highlight":
				import("../../components/border-highlight/index.js").then(m => {
					const currentCom = m.default;
					if (CurrentCom !== currentCom)
						this.setState({ CurrentCom: currentCom });
				});
				return;
			/* falls through */
			default:
				return <div className="404" />;
		}
	};
}
