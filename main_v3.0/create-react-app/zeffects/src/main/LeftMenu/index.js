import React from "react";
import { Menu } from "antd";
import "./style.css";

import DB from "../../db";
import { Link } from "react-router-dom";

import "../../tool";

const { LeftMenu } = DB;
const { SubMenu, Item } = Menu;

export default class extends React.Component {
	state = {
		currMenuLevel1: ["1"],
		currMenuLevel2: ["1-1"]
	};

	componentDidMount() {
		const _url = window.location.href;
		const _arr = _url.split("/");
		const _currpath = _arr[_arr.length - 1];

		this.findCurrMenu(_currpath);
	}

	render() {
		const { currMenuLevel1, currMenuLevel2 } = this.state;

		return (
			<section className="left-menu">
				<Menu
					onClick={item => {
						this.handleClick(item);
					}}
					selectedKeys={currMenuLevel2}
					openKeys={currMenuLevel1}
					mode="inline"
				>
					{LeftMenu.map(item => {
						return (
							<SubMenu
								key={item.key}
								title={<span>{item.text}</span>}
								onTitleClick={this.clickTitle}
							>
								{item.children.map(_item => {
									return (
										<Item key={_item.key} label={_item.link}>
											<Link to={_item.link}>{_item.text}</Link>
										</Item>
									);
								})}
							</SubMenu>
						);
					})}
				</Menu>
			</section>
		);
	}

	findCurrMenu = path => {
		if (!path) return;

		const _arr = path.split("-");
		const _tag = _arr[0];

		let _currml1, _children, _currml2;

		LeftMenu.forEach((item, i) => {
			if (item.tag === _tag) {
				_currml1 = item.key;
				_children = item.children;
			}
		});

		_children.forEach(item => {
			if (item.link === path) {
				_currml2 = item.key;
			}
		});

		this.setState({
			currMenuLevel1: [_currml1.toString()],
			currMenuLevel2: [_currml2]
		});
	};

	clickTitle = item => {
		const { key } = item;

		const { currMenuLevel1 } = this.state;
		if (currMenuLevel1.has(key)) {
			this.setState({
				currMenuLevel1: currMenuLevel1.kickoff(key)
			});
		} else {
			this.setState({
				currMenuLevel1: currMenuLevel1.concat(key)
			});
		}
	};

	handleClick = item => {
		const { key } = item;
		this.setState({
			currMenuLevel2: [key]
		});
	};
}
