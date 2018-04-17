import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { path } from './data';
import { configData } from './data';

import pages from './pages';

/****************辅助函数********************/
const getPagePosition = (v, obj) => {

	let _str = "Page" + v.split('-')[0] + '_' + v.split('-')[1];

	return obj[_str];
}

const mapPathToPage = (_path, _pages) => {

	let v;
	for (let i = 0; i < path.length; i++) {
		if (_path.split('/')[1] + "/" + _path.split('/')[2] === path[i].position) {
			v = path[i].value; break;
		}
	}

	let _str = "Page" + v.split('-')[0] + "_" + v.split('-')[1];

	if (!_pages[_str])
		return _pages["default"];
	return _pages[_str];
}

/****************辅助函数********************/

class Routes extends Component {


	render() {

		let num = 0;
		let _default = getPagePosition(configData.currMenu, pages);

		return (
			<div className="contents-container">
				<HashRouter>
					<Switch>
						{
							path.map((item, index) => {
								if (!item.position.split('/')[1]) return;
								let _path = "/" + item.position; num++;
								return (<Route key={index} exact path={_path} component={mapPathToPage(_path, pages)}></Route>)
							})
						}
						<Route exact path="/" component={_default} />
						<Route path="*" component={pages.NotFound}></Route>
					</Switch>
				</HashRouter>
	  	</div>
		)
	}


}

export default Routes;
