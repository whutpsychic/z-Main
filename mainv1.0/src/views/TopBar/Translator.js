import React, {Component} from 'react';
import { connect } from 'react-redux';

import { translate } from './actions.js';

class Translator extends Component {

	render() {

		const { list } = this.props;

		return (
      <div className="language-selector ">
        <select onChange={this.changeSelect.bind(this)}>
					{
						list.map((item, index) => {
							return <option key={index} value={item.type}>{item.text}</option>
						})
					}
        </select>
      </div>
		)
  }

  changeSelect(e) {
    const { onTranslate } = this.props;
    let v = e.target.value;
    onTranslate(v);
  }

}

const mapStateToProps = (state, ownProps) => {
  //console.log(state)
  return {
		list: state.Languages || []
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onTranslate: (lang) => {
      dispatch(translate(lang))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Translator);