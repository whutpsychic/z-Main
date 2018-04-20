
import React, { Component } from 'react';
import PageIn from './pageIn.js';

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

class Word extends Component {

	render() {

		const { children } = this.props;

		return (<li onClick={this.clickWord.bind(this)}>{children}</li>);

	}

	clickWord() {

		const { data, onClick } = this.props;
		onClick(data);
	}

}

class Dictionary extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			currpage: 1
		}
	}

	render() {

		const { list, onClick } = this.props;
		let { currpage } = this.state;

		let _data = getDataWithCurrpage(list, currpage, 20);
		let _total = list.length / 20;

		return (
			<div className="dictionary-container">
				<ul>
					{
						list.map((item, index) => {
							return <Word key={index} data={item} onClick={onClick}>{item.title}</Word>
						})
					}
				</ul>
			</div>
			)
	}
  //<PageIn currpage={currpage} total={_total} maxnum={20} onChange={this.onChangePage.bind(this)} />

	onChangePage(v) {
		v = parseInt(v, 10);
		this.setState({
			currpage: v
		})
	}

}

export default Dictionary;
