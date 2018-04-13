import React, {Component} from 'react';
import { connect } from 'react-redux';

class BottomBar extends Component {

	render() {

		let p1, p2, p3; p1 = p2 = p3 = "";

		if (this.props.language === 'Chinese') { p1 = "招收广告位"; p2 = "中华人民共和国　ZBC"; p3 = "当前所在地区: 北京"; }
		if (this.props.language === 'English') { p1 = "Recruit for Advertisment"; p2 = "People Republic Of China  ZBC"; p3 = "Current Area: BeiJing"; }

		return (
			<div className="bottom-bar">
				<p>{p1}</p>
				<p>Copyright©2017-2099　zbc</p>
				<p>{p2}</p>
				<p>TEL:151xxxxx243　QQ:1511828529　{p3}</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.language || ""
	}
}

export default connect(mapStateToProps)(BottomBar);