
import React, { Component } from 'react';

import { Grid } from '../../component';



import gridOption from './gridOption.js';
//data
import { MovieActionsSeasonsCN } from '../../data';

class Page extends Component {





	render() {


		return (
			<div>
				Page5_2页面
				<Grid option={gridOption} data={MovieActionsSeasonsCN}/>
			</div>
			)

	}

}

export { Page };