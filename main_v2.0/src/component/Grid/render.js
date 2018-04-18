
import React, { Component } from 'react';
import './grid.css';
import PageIn from './pageIn.js';

import { configData } from '../../data';

/*************辅助函数*************/
const getDataWithCurrpage = (data, p) => {

	if (typeof p !== 'number') { console.log('根据页码获取数据源辅助函数传入的页码不是一个数字'); return []; }

	let _arr = [];






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
			<tr className={_cls}>
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
}

class Grid extends Component{

	constructor() {
		super(...arguments);

		this.state = {
			currpage: 1
		}
	}

	render() {

		const { option, data } = this.props;
		let { currpage } = this.state;

		let _data = getDataWithCurrpage(data, currpage);
		let _total = data.length / configData.maxnum;

		return (
			<div className="z-table">
				<table>
					<tbody>
						<Item data={option} />
						{
							_data.map((item, index) => {
								return <Item2 key={index} even={index%2} data={item} option={option} />
							})
						}
					</tbody>
				</table>
				<PageIn total={_total} maxnum={configData.maxnum} onChange={this.onChangePage.bind(this)}/>
			</div>
			)
	}

	onChangePage() {

	}


}

export default Grid;
