import React, { Component } from 'react';
import Animate from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
//import '../animateCss/fade.css';

import Translator from './Translator.js';

import { topbarDataCN } from '../../data';
import { configData } from '../../data';

import { translate } from './actions.js';

class TopBar extends Component {

  render() {

    const languages = configData.__Languages__;
		const { onTranslate } = this.props;

		return (
			<div className="top-bar" ref="container">
				<Translator list={languages} onChange={onTranslate}/>
        <ul>
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
                  <li>{item.text}</li>
                </Animate>
              )
            })
          }
        </ul>
			</div>
		)
	}

	componentDidMount() {



	}

}

const mapStateToProps = (state) => {

  return {
    language: state.language
  }
}

const mapDispatchToProps = (dispatch) => {

	return {

		//切换语言
    onTranslate: (lang) => {
			dispatch(translate(lang));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
