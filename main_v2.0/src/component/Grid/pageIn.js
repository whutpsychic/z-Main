
import React, { Component } from 'react';


/**********辅助函数************/

//重新处理total整数（小数变整数）
const reexecute = (total) => {
	let _arr = [];
	let _tt;
	let _else = total - parseInt(total, 10);

	if (_else) _tt = parseInt(total, 10) + 1;
	else if (!_else) _tt = parseInt(total, 10);

	for (let i = 1; i < _tt + 1; i++) {
		_arr.push(i);
	}
	return _arr;
}




/**********辅助函数************/


class PageIn extends Component{

	render() {

		const { total, maxnum } = this.props;
		let _total = reexecute(total);
		const { currpage } = this.props;

		return (
			<div className="z-pageIn">
				<ul>
					{
						_total.map((item, index) => {
							if (currpage === item)
								return <li key={index} className="active" onClick={this.changePage.bind(this)}>{item}</li>
							return <li key={index} onClick={this.changePage.bind(this)}>{item}</li>
						})
					}
				</ul>
			</div>
			)
	}

	changePage(e) {
		let v = e.target.innerHTML;
		const { onChange } = this.props;
		onChange(v);
	}

}

export default PageIn;
