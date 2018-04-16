import React, { Component } from 'react';


class Translator extends Component {





	render() {

		const { list } = this.props;

		return (
			<div className="language-selector">
				<select>
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