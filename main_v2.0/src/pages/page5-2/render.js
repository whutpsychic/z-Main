
import React, { Component } from 'react';

import { Grid } from '../../component';
import { Pager } from '../../component';

import gridOption from './gridOption.js';
//data
import { MovieActionsSeasonsCN } from '../../data';

/******************************/
import _store_ from './store.js';
import { changeContent, changePagertype, showPager } from './actions.js';

/******************************/

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = _store_.getState();
	}

	render() {

		const _pageStyle = {};
		const { content, showpager, pagetype } = this.state;

		return (
			<div style={_pageStyle}>
				<Grid option={gridOption} data={MovieActionsSeasonsCN} onClickLine={this.clickGridLine.bind(this)}/>
				<Pager show={showpager} type={pagetype} content={content} closeFn={this.closeWinFunction.bind(this)}/>
			</div>
			)

	}

	clickGridLine(data) {

		//更换现显示的文章内容
		_store_.dispatch(changeContent(data));

		//更换pager显示的type
		_store_.dispatch(changePagertype("article"));

		//是否显示pager
		_store_.dispatch(showPager(true));

		this.onRefresh();
	}

	onRefresh() {
		this.setState(_store_.getState());
	}

	closeWinFunction() {
		//是否显示pager
		_store_.dispatch(showPager(false));
		this.onRefresh();
	}

	componentDidMount() {
		_store_.subscribe(this.onRefresh.bind(this));
	}

	componentWillUnmount() {
		_store_.unsubscribe(this.onRefresh);
	}

}

export { Page };