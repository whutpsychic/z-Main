import React from "react";
import { Menu } from "antd";
import "./style.css";

import DB from "../../db";
import Context from "../../context";

import {Link} from 'react-router-dom';

const { LeftMenu } = DB;
const { SubMenu, Item } = Menu;

export default class extends React.Component {
	render() {
		return (
			<section className="left-menu">
				<Menu
					onClick={item => {
						this.handleClick(item);
					}}
					defaultSelectedKeys={["1-1"]}
					defaultOpenKeys={["1"]}
					mode="inline"
				>
					{LeftMenu.map(item => {
						return (
							<SubMenu key={item.key} title={<span>{item.text}</span>}>
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

	handleClick = (updateCom, item) => {
		// const {
		// 	item: {
		// 		props: { label }
		// 	}
		// } = item;
		// updateCom(label);
	};
}
