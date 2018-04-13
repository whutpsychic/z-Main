import React, { Component }from 'react';
import { connect } from 'react-redux';

import { Contents } from '../../../common';

import { changeArticle, showPage, setPageType } from '../../action.js';

//接引数据源
import { DictionaryCN } from '../../../data/dictionary';

/*辅助函数 */
const getContents = (obj) => {

	let arr = [];

	for (let i in obj) {
		let _obj = {
			label: obj[i].word,
			value:obj[i].value
		};
		arr.push(_obj);
	}

	return arr;
}

const getExpressions = (v, data) => {

	for (let i in data) {
		if (data[i].value === v) {
			return data[i];
		}
	}
}
/*辅助函数 */

class Page4_4 extends Component {

	render() {

		return (
			<div className="left-content">
        <Contents list={getContents(DictionaryCN)} onClick={this.chooseItem.bind(this)}></Contents>
			</div>
		)
	}

	chooseItem(v) {
		let expressions = getExpressions(v, DictionaryCN);
		const { clickItem } = this.props;
		clickItem(expressions);
	}

}

const mapStateToProps = (state) => {
	//console.log(state)
	return {
		language: state.language,
		showpage: state.showpage
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		clickItem: (expression) => {
			dispatch(setPageType('word'));
			dispatch(changeArticle(expression));
			dispatch(showPage(true));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Page4_4);
