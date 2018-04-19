
import React, { Component } from 'react';
import './page.css';

/*************辅助函数*************/




/*************辅助函数*************/


class Pager extends Component{

	render() {

		const { show, type, content } = this.props;

		//处理是否显示类名
		let pager_cls = this.executeshowcls(show);

		//处理pager类型类名
		let type_cls = "pager-main";
		switch (type) {
			case "article": type_cls += " article"; break;
			case "word": type_cls += " word"; break;
			default: type_cls += " article"; break;
		}

		return (
			<div className={pager_cls}>
				<div className="pager-membrane" onClick={this.executeshowcls}></div>
				<div className={type_cls}>
					<div className="pager-title"><p>{content.title}</p></div>
					<div className="pager-content"></div>
				</div>
			</div>
			)
	}

	//处理是否显示类名
	executeshowcls(bool) {
		let pager_cls = "z-pager"; if (!bool) pager_cls += " hide";
		return pager_cls;
	}

}

export default Pager;
