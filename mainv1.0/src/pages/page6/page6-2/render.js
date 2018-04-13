import React, { Component }from 'react';
import { connect } from 'react-redux';

import { Contents } from '../../../common';

import { changeArticle, showPage, setPageType } from '../../action.js';

//接引数据源
import { EncyclopediasFactCN } from '../../../data/articles';

/*辅助函数 */
const getContents = (obj) => {

	let arr = [];

	for (let i in obj) {
		let _obj = {
			label: obj[i].text,
			value:obj[i].value
		};
		arr.push(_obj);
	}

	return arr;
}

const getArticle = (v, data) => {

	for (let i in data) {
		if (data[i].value === v) {
			return data[i];
		}
	}
}
/*辅助函数 */

class Page6_2 extends Component {

	render() {

		return (
			<div className="left-content">
        <Contents list={getContents(EncyclopediasFactCN)} onClick={this.chooseItem.bind(this)}></Contents>
			</div>
		)
	}

	chooseItem(v) {
    let article = getArticle(v, EncyclopediasFactCN);
		const { clickItem } = this.props;
		clickItem(article);
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
		clickItem: (article) => {
      dispatch(setPageType('article'));
			dispatch(changeArticle(article));
			dispatch(showPage(true));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Page6_2);
