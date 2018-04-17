import React, { Component } from 'react';


class Translator extends Component {

	render() {

		const { list } = this.props;

		return (
			<div className="language-selector">
        <select onChange={this.onChangeSelect.bind(this)}>
					{
						list.map((item, index) => {
							return (<option key={index} value={item.value}>{item.text}</option>)
						})
					}
				</select>
			</div>
		)
	}

	onChangeSelect(e) {
		let v = e.target.value;
		const { onChange } = this.props;
		onChange(v);
	}

}

export default Translator;