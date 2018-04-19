
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


	render() {

		const _pageStyle = {};
		const { content, showpager, pagetype } = _store_.getState();
		console.log(showpager)
		return (
			<div style={_pageStyle}>
				<Grid option={gridOption} data={MovieActionsSeasonsCN} onClickLine={this.clickGridLine.bind(this)}/>
				<Pager show={showpager} type={pagetype} content={content} />
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

		console.log(_store_.getState())
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

}

export { Page };