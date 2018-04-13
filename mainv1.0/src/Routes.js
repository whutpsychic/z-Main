import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import configData from './data/configData.js';
import path from './data/path.js';

import { Page1_1 } from './pages';
import { Page1_2 } from './pages';
import { Page1_3 } from './pages';
import { Page1_4 } from './pages';

import { Page2_1 } from './pages';
import { Page2_2 } from './pages';
import { Page2_3 } from './pages';
import { Page2_4 } from './pages';
import { Page2_5 } from './pages';

import { Page3_1 } from './pages';
import { Page3_2 } from './pages';
import { Page3_3 } from './pages';
import { Page3_4 } from './pages';

import { Page4_1 } from './pages';
import { Page4_2 } from './pages';
import { Page4_3 } from './pages';
import { Page4_4 } from './pages';

import { Page5_1 } from './pages';
import { Page5_2 } from './pages';
import { Page5_3 } from './pages';
import { Page5_4 } from './pages';

import { Page6_1 } from './pages';
import { Page6_2 } from './pages';

import { NotFound } from './pages';


const pagesObj = {
	Page1_1: Page1_1, Page1_2: Page1_2, Page1_3: Page1_3, Page1_4: Page1_4,
	Page2_1: Page2_1, Page2_2: Page2_2, Page2_3: Page2_3, Page2_4: Page2_4, Page2_5: Page2_5,
	Page3_1: Page3_1, Page3_2: Page3_2, Page3_3: Page3_3, Page3_4: Page3_4,
	Page4_1: Page4_1, Page4_2: Page4_2, Page4_3: Page4_3, Page4_4: Page4_4,
	Page5_1: Page5_1, Page5_2: Page5_2, Page5_3: Page5_3, Page5_4: Page5_4,
	Page6_1: Page6_1, Page6_2: Page6_2
};

/***************辅助函数**************/
const getPagePosition = (v, obj) => {

  let _str = "Page" + v.split('-')[0] + '_' + v.split('-')[1];

	return obj[_str];
}


const mapPathToPage = (_path, pages) => {

	let v;
	for (let i = 0; i < path.length; i++) {
		if (_path.split('/')[1] + "/" + _path.split('/')[2] === path[i].position) {
			v = path[i].value; break;
		}
	}

	let _str = "Page" + v.split('-')[0] + "_" + v.split('-')[1];
	return pages[_str];
}

/***************辅助函数**************/

class Routes extends Component {

	render() {

		let num = 0;
		let _default = getPagePosition(configData.currentPosition, pagesObj);

		return (
			<HashRouter>
        <Switch>
          {
            path.map((item, index) => {
              if (!item.position.split('/')[1]) return;
							let _path = "/" + item.position; num++;
							return (<Route key={index} exact path={_path} component={mapPathToPage(_path, pagesObj)}></Route>)
            })
          }
          <Route exact path="/" component={_default} />
          <Route path="*" component={NotFound}></Route>
				</Switch>
			</HashRouter>
		)
	}

}

export default Routes;