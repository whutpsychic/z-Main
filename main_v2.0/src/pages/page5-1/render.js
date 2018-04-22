
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logogif from './images/movie.gif';
import './page.css';

import { Grid } from '../../component';
import { Pager } from '../../component';

import { gridOptionEN, gridOptionCN }from './gridOption.js';

//data
import { MovieActionsClassicCN } from '../../data';
import { MovieActionsSeasonsEN } from '../../data';

/******************************/
import _store_ from './store.js';
import { changeContent, changePagertype, showPager } from './actions.js';
import { loadavg } from 'os';

/******************************/

/******************************************/
//根据语言选择数据源
const getDataFromLanguage = (lang) => {

	switch (lang) {

		case "Chinese": return MovieActionsClassicCN;
		case "English": return MovieActionsSeasonsEN;
		default: return MovieActionsClassicCN;
	}
}

//根据语言选择Grid设置数据源
const getGridoptionFromLanguage = (lang) => {

	switch (lang) {

		case "Chinese": return gridOptionCN;
		case "English": return gridOptionEN;
		default: return gridOptionCN;
	}
}



/******************************************/


class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = this.getOwnState();
	}

	render() {

		const _pageStyle = { height: '60em'};
		const { content, showpager, pagetype } = this.state;

		const { language } = this.props;

		let _maindata = getDataFromLanguage(language);
		let _option = getGridoptionFromLanguage(language);

    return (
      <div style={_pageStyle} className="page5-2">
        <img src={logogif} alt="标题图标"/>
				<Grid option={_option} data={_maindata} onClickLine={this.clickGridLine.bind(this)}/>
				<Pager show={showpager} type={pagetype} content={content} closeFn={this.closeWinFunction.bind(this)}/>
			</div>
			)
	}

	//获得当前自身状态
	getOwnState() {
		return _store_.getState();
	}

	clickGridLine(data) {

		//更换现显示的文章内容
		_store_.dispatch(changeContent(data));

		//更换pager显示的type
		_store_.dispatch(changePagertype("article"));

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