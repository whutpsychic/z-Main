import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuList from './MenuList.js';
import { path } from '../../data';

import { changeMenu } from './actions.js';
/************************辅助函数************************/
import { menuDataCN } from '../../data';
import { menuDataEN } from '../../data';

const getMenuData = (lang) => {
	switch (lang) {

		case "Chinese": return menuDataCN;
		case "English": return menuDataEN;
		default: return menuDataCN;
	}
}

const getPath = (v) => {

	let _path = "/";
	let _m1 = v.split('-')[0];

	//获取一级菜单值
	for (let i = 0; i < path.length; i++) {
		if (path[i].value === _m1) {
			_path += path[i].position + '/';
			break;
		}
	}

	//获取二级菜单值
	for (let i = 0; i < path.length; i++) {
		if (path[i].value === v) {
			_path += path[i].position.split('/')[1];
			break;
		}
	}

	return _path;
}

/************************辅助函数************************/


class Menu extends Component {

	

	render() {


		const { language, position } = this.props;
		let list = getMenuData(language);

		return (
			<div className="left-menu" ref="xxx">
				<div className="inner-container">
					<MenuList list={list} position={position} onChange={this.onChangeMenu.bind(this)} />
				</div>
			</div>
		)
	}

	onChangeMenu(v) {
		const { changeMenu } = this.props;
		changeMenu(v);
	}

}

const mapStateToProps = (state) => {

	return {
		language: state.language,
		position: state.menuPosition
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		changeMenu: (v) => {
			if (!v.split('-')[1])
				v += '-1';
			dispatch(changeMenu(v));
			let _before = getPath(v);
			window.location.hash = _before;
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
