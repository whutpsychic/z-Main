
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './page.css';

import { Pager } from '../../component';
import Dictionary from './views/Dictionary.js';
import Searcher from './views/Searcher.js';

//data
import { DictionaryCN } from '../../data';

/******************************/
import _store_ from './store.js';
import { changeContent, changePagertype, showPager, changeWord } from './actions.js';

/******************************/

/******************************************/
//根据语言选择数据源
const getDataFromLanguage = (lang, words) => {

	let source = []; let _ret = [];

	switch (lang) {

		case "Chinese": source = DictionaryCN; break;
		case "English": break;
		default: source = DictionaryCN;
	}

	if (!words) { return source; };

	for (let i in source) {
		if (source[i].title.indexOf(words)===-1) { continue;}
		_ret.push(source[i])
	}

	return _ret;
}



/******************************************/


class Page extends Component {

	constructor() {
		super(...arguments);

		this.getDataFromsearchV.bind(this);

		this.state = this.getOwnState();
	}

	render() {

		const _pageStyle = { height: '60em'};
		const { content, showpager, pagetype, currwords } = this.state;

		const { language } = this.props;

		let _maindata = getDataFromLanguage(language, currwords);
		//let _maindata = this.getDataFromsearchV();

		return (
			<div style={_pageStyle} className="page4-4">
				<Searcher onChange={this.getWords.bind(this)}/>
				<Dictionary list={_maindata} onClick={this.clickWordLine.bind(this)}/>
				<Pager show={showpager} type={pagetype} content={content} closeFn={this.closeWinFunction.bind(this)}/>
			</div>
			)
	}

	getDataFromsearchV() {



	}

	getWords(v) {

		_store_.dispatch(changeWord(v))

	}

	//获得当前自身状态
	getOwnState() {
		return _store_.getState();
	}

	clickWordLine(data) {

		console.log(data)
		//更换现显示的文章内容
		_store_.dispatch(changeContent(data));

		//更换pager显示的type
		_store_.dispatch(changePagertype("word"));

		//是否显示pager
		_store_.dispatch(showPager(true));

	}

	//需要诚信渲染的的时候
	onRefresh() {
		this.setState(this.getOwnState());
	}

	//关闭膜函数
	closeWinFunction() {

		//是否显示pager
		_store_.dispatch(showPager(false));
		this.onRefresh();
	}

	//shouldComponentUpdate(nextProps, nextState) {
	//	return this.state.showpager !== nextState.showpager;
	//}

	componentDidMount() {
		_store_.subscribe(this.onRefresh.bind(this));
	}

}

const mapStateToProps = (state) => {

	return {
		language: state.language
	}
}


export default connect(mapStateToProps)(Page);