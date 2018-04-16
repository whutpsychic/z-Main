import React, { Component } from 'react';


class Translator extends Component {

	render() {

		const { list, onChange } = this.props;

		return (
			<div className="language-selector">
        <select onChange={onChange}>
					{
						list.map((item, index) => {
							return (<option key={index}>{item.text}</option>)
						})
					}
				</select>
			</div>
		)
	}

}

export default Translator;