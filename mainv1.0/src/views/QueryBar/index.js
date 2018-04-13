import React, { Component } from 'react';
import { connect } from 'react-redux';

class QueryBar extends Component {

	constructor() {
		super(...arguments);

		this.state = { value: '' }
	}

	render() {

		const { language } = this.props;

		let _text = "", _placeholder = "";

		if (language === 'Chinese') { _text = "查询"; _placeholder = "该功能暂时不可用" };
		if (language === 'English') { _text = "Search"; _placeholder = "This Function Cannot Be Used Now"};

		return (
			<div className="query-bar">
				<input disabled onChange={this.changeWord.bind(this)} placeholder={_placeholder} /><div className="queryBtn" onClick={this.onQuery.bind(this)}>{_text}</div>
			</div>
		);
	}

	changeWord(e) {
		let v = e.target.value;
		this.setState({ value: v });
	}

	onQuery() {
	
	}
}

const mapStateToProps = (state) => {

	return {
		language: state.language
	}
}

export default connect(mapStateToProps)(QueryBar);
