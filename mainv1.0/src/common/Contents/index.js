import React, { Component } from 'react';

import configData from '../../data/configData.js';

class PageIn extends Component {

	constructor() {
		super(...arguments);
		
		this.clickLi.bind(this);

		this.state = {
			currpage: 1
		}
	}

	render() {

		const _arr = this.loadPage();
		let _curr = this.state.currpage;

		return (
			<div className="page-turning">
				<ul>
					{
						_arr.map((item, index) => {
							if (item === _curr)
								return <li key={index} className="active" onClick={this.clickLi.bind(this)}>{item}</li>
							return <li key={index} onClick={this.clickLi.bind(this)}>{item}</li>
						})
					}
				</ul>
			</div>
		)
	}

	//辅助函数
	loadPage() {
		const { total } = this.props;
		let _total = parseInt(total, 10);
		let _arr = [];
		for (let i = 0; i < _total; i++) {
			_arr.push(i + 1);
		}
		return _arr;
	}

	clickLi(e) {
		let v = e.target.innerHTML;
		this.setState({
			currpage: parseInt(v, 10)
		})
		const { onChange } = this.props;
		onChange(v);
	}
}

class Contents extends Component {

	render() {

		const { list } = this.props;
		let _total = this.getTotal(list, configData.maxNum);

		return (
			<div>
				<div className="artical-menus">
					<ul>
						{
							list.map((item, index) => {
								return <li key={index} value={item.value} onClick={this.clickItem.bind(this)}>{item.label}</li>
							})
						}
					</ul>
				</div>
				<PageIn total={_total} onChange={this.changePage.bind(this)}/>
			
			</div>
			)
	}

	changePage(v) {
		console.log(v)
	}

	clickItem(e) {
		let v = e.target.getAttribute('value');
		const { onClick } = this.props;
		onClick(v);
	}

	getTotal(list, max) {
		let _t;
		_t = list.length / max;
		if (list.length % max) _t += 1;
		return parseInt(_t, 10);
	}

}

export default Contents;