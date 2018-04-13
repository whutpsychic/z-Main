import React, {Component} from 'react';
import { connect } from 'react-redux';

import path from '../../data/path.js';

import menuCN from '../../data/menu/menuDataCN.js';
import menuEN from '../../data/menu/menuDataEN.js';


import { changeMenu } from './actions.js';

/****************辅助函数********************/

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

/****************辅助函数********************/

class Item2 extends Component {

	render() {

		const { value, children } = this.props;
		const { position } = this.props;

		if (value === position) {
			return (<li className="active" value={value} onClick={this.onChangeMenu.bind(this)}>{children}</li>)
		}
		return (<li value={value} onClick={this.onChangeMenu.bind(this)}>{children}</li>)
	}

	onChangeMenu(e) {
		const { onChooseMenu2 } = this.props;
		let v = e.target.getAttribute('value');
		onChooseMenu2(v);
	}
}

const item2MapStateToProps = (state) => {
	return {
		position: state.menuPosition
	}
}

const item2MapDispatchToProps = (dispatch) => {

	return {
		onChooseMenu2: (v) => {
			dispatch(changeMenu(v));
			let _before = getPath(v);
			window.location.hash = _before;
		}
	}
}

Item2 = connect(item2MapStateToProps, item2MapDispatchToProps)(Item2);


class Item extends Component {

	render() {

		const { value, kids, children, active } = this.props;

		if (active) {
			return (<li className="active">
				<label value={value} onClick={this.onChangeMenu.bind(this)}>{children}</label>
				<ul>
					{
						kids.map((item, index) => {
							return (<Item2 key={index} value={item.value}>{item.text}</Item2>)
						})
					}
				</ul>
			</li>)
		}

		return (<li><label value={value} onClick={this.onChangeMenu.bind(this)}>{children}</label></li>)
	}

	onChangeMenu(e) {
		const { onChooseMenu1 } = this.props;
		let v = e.target.getAttribute('value');
		v += '-1';
		onChooseMenu1(v);
	}

}

const itemMapStateToProps = (state) => {
	return {
		position: state.menuPosition
	}
}

const itemMapDispatchToProps = (dispatch) => {

	return {
		onChooseMenu1: (v) => {
			dispatch(changeMenu(v));
			let _before = getPath(v);
			window.location.hash = _before;
		}
	}
}

Item = connect(itemMapStateToProps, itemMapDispatchToProps)(Item);


class Menu extends Component {

	render() {

		const { menu } = this.props;
		const { position } = this.props;

		const _m1 = position.split('-')[0];

		return (
			<ul>
				{
					menu.map((item, index) => {
						if (item.value === _m1)
							return <Item key={index} value={item.value} kids={item.children} active>{item.text}</Item>
						else {
							return <Item key={index} value={item.value} kids={item.children}>{item.text}</Item>
						}
					})
				}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {

	let _menu;
	if (state.language === 'Chinese') _menu = menuCN;
	else if (state.language === 'English') _menu = menuEN;

	return {
		language: state.language || "",
		menu: _menu,
		position: state.menuPosition
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);