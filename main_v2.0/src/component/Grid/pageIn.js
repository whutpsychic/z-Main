
import React, { Component } from 'react';

class PageIn extends Component{

	render() {

		const { total, maxnum } = this.props;
		let _total = this.reexecute(total);

		return (
			<div className="z-pageIn">
				<ul>
					{
						_total.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
			)
	}

	//重新处理total整数（小数变整数）
	reexecute(total) {
		let _arr = [];
		let _tt;
		let _else = total - parseInt(total, 10);

		if (_else) _tt = parseInt(total, 10) + 1;
		else if (!_else) _tt = parseInt(total, 10);

		for (let i = 1; i < _tt+1; i++) {
			_arr.push(i);
		}
		return _arr;
	}

}

export default PageIn;
