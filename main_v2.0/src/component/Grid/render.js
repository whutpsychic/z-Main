
import React, { Component } from 'react';
import './grid.css';
import PageIn from './pageIn.js';

import { configData } from '../../data';

/*************辅助函数*************/
//根据当前页从所有数据中找出该加载的数据
//data: 全部数据源
//p: 当前第几页
//num: 一页最多多少条
const getDataWithCurrpage = (data, p, num) => {

	if (typeof p !== 'number') { console.log('根据页码获取数据源辅助函数传入的 p 或 num 不是一个数字'); return []; }

	let _arr = [];

	//判断当前页会不会被填满
	data.length < p * num ? fillitUnfull() : fillitFull();

	//会被填满，填满之
	function fillitFull() {
		for (let i = (p - 1) * num; i < num * p; i++) {
			_arr.push(data[i]);
		}
	}

	//不会填满，全填之
	function fillitUnfull() {
		for (let i = (p - 1) * num; i < data.length; i++) {
			_arr.push(data[i]);
		}
	}

	return _arr;
}





/*************辅助函数*************/



class Item extends Component {

	render() {

		const { data } = this.props;

		return (
			<tr>
				{
					data.map((item, index) => {
						return <th key={index}>{item.title}</th>
					})
				}
			</tr>
			)
	}
}

class Item2 extends Component {

	render() {

		const { data, option, even } = this.props;

		let _cls = "td-child"; if (even) _cls += " even";

		return (
			<tr className={_cls} onClick={this.clickTr.bind(this)}>
				{
					option.map((item, index) => {

						if (typeof item.render === "function")
							return <td key={index}>{item.render(data[item.field])}</td>
						if (typeof item.render === "string")
							return <td key={index}>{item.render}</td>
						return <td key={index}>{data[item.field]}</td>
					})
				}
			</tr>
		)
	}

	clickTr() {
		const { onClick, data } = this.props;
		onClick(data);
	}
}

class Grid extends Component{

	constructor() {
		super(...arguments);

		this.state = {
			currpage: 1
		}
	}

	render() {

		const { option, data, onClickLine} = this.props;
		let { currpage } = this.state;

		let _data = getDataWithCurrpage(data, currpage, configData.maxnum);
		let _total = data.length / configData.maxnum;

		return (
			<div className="z-grid">
				<div className="grid-container">
					<table>
						<tbody>
							<Item data={option} />
							{
								_data.map((item, index) => {
									return <Item2 key={index} even={index % 2} data={item} option={option} onClick={onClickLine} />
								})
							}
						</tbody>
					</table>
				</div>
				<PageIn currpage={currpage} total={_total} maxnum={configData.maxnum} onChange={this.onChangePage.bind(this)}/>
			</div>
			)
	}

	onChangePage(v) {
		v = parseInt(v, 10);
		this.setState({
			currpage:v
		})
	}


}

export default Grid;
