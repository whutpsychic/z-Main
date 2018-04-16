import React, { Component } from 'react';
import Animate from 'react-addons-css-transition-group';
import '../animateCss/fade.css';

import { topbarDataCN } from '../../data';

import Translator from './Translator.js';


class TopBar extends Component {

	render() {
		return (
			<div className="top-bar" ref="container">
				<Translator />
				{
					topbarDataCN.map((item, index) => {
						return (
							<Animate
								key={index}
								transitionName="fade"
								transitionAppear={true}
								transitionEnterTimeout={1500}
								transitionLeaveTimeout={1500}
								transitionAppearTimeout={1500}
							>
								<div>{item.text}</div>
							</Animate>
						)
					})
				}
			</div>
		)
	}

	componentDidMount() {



	}

}

export default TopBar;
