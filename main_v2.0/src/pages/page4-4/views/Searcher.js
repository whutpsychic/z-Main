
import React, { Component } from 'react';
import Image from '../images/logo.png';

class Searcher extends Component {

	//constructor() {
	//	super(...arguments);

	//	this.state = {
	//		value:""
	//	}
	//}

	render() {

		return (
			<div className="searcher">
				<img alt="标题图片" src={Image} />
				<div className="search-input">
					<input onChange={this.resetValue.bind(this)}/>
				</div>
			</div>
			)
	}

	resetValue(e) {

		let v = e.target.value;

		const { onChange } = this.props;

		if (typeof onChange === "function")
			onChange(v);
	}
}

export default Searcher;
