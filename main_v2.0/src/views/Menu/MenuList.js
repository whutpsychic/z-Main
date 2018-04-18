import React, { Component } from 'react';


class Item2 extends Component {

	render() {

		const { children, value } = this.props;
		const { active } = this.props;

		if (active)
			return (<li className="menu-level2 selected" onClick={this.onClickMenuLevel2.bind(this)} value={value}>{children}</li>)
		return (<li className="menu-level2" onClick={this.onClickMenuLevel2.bind(this)} value={value}>{children}</li>)
	}

	onClickMenuLevel2(e) {
		const { onChange } = this.props;
		let v = e.target.getAttribute('value');
		onChange(v);
	}

}


class Item extends Component {

	render() {

		const { children, kids, value } = this.props;
		const { active, position } = this.props;

		let _cls = "menu-level1";
		if (active) _cls += " selected";

		return (
			<li className={_cls}>
				<label value={value} onClick={this.clickMenuLevel1.bind(this)}>{children}</label>
				<ul>
					{
						kids.map((item, index) => {
							if (item.value === position)
								return (<Item2 key={index} onChange={this.clickMenuLevel2.bind(this)} value={item.value} active>{item.text}</Item2>);
							return (<Item2 key={index} onChange={this.clickMenuLevel2.bind(this)} value={item.value}>{item.text}</Item2>);
						})
					}
				</ul>
			</li>	
			)
	}

	clickMenuLevel1(e) {
		const { onChange } = this.props;
		let v = e.target.getAttribute('value');
		onChange(v);
	}

	clickMenuLevel2(v) {
		const { onChange } = this.props;
		onChange(v);
	}

}





class MenuList extends Component {

	render() {

		const { list, position, onChange } = this.props;

		return (
			<ul>
				{
					list.map((item, index) => {
						if (item.value === position.split('-')[0])
							return <Item key={index} onChange={onChange} kids={item.children} value={item.value} position={position} active>{item.text}</Item>
						return <Item key={index} onChange={onChange} kids={[]} value={item.value} position={position}>{item.text}</Item>
					})
				}
		  </ul>
		)
	}
}



export default MenuList;
