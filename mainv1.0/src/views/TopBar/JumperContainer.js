import React, {Component} from 'react';
import { connect } from 'react-redux';

import jumpersCN from '../../data/jumpers/jumpersCN.js';
import jumpersEN from '../../data/jumpers/jumpersEN.js';


class JumperContainer extends Component {

	render() {

		const { list } = this.props;

    return (<div className="right-contents">
      <ul>
				{
					list.map((item, index) => {
						return <li key={index}><a target="_blank" href={item.href}>{item.text}</a></li>
					})
				}
      </ul>
    </div>)
	}

}

const mapStateToProps = (state) => {
	//console.log(state);
	let data = [];
	if (state.language === 'Chinese') data = jumpersCN;
	else if (state.language === 'English') data = jumpersEN;
	return {
		list: data
	}
}

export default connect(mapStateToProps)(JumperContainer);