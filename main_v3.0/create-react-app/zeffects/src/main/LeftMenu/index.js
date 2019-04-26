import React from "react";
import { Menu } from "antd";
import "./style.css";

import DB from "../../db";
import Context from "../../context";

const { LeftMenu } = DB;
const { SubMenu, Item } = Menu;

export default class extends React.Component {
	render() {
		return (
			<section className="left-menu">
				<Context.Consumer>
					{({ updateCom }) => {
						return (
							<Menu
								onClick={item => {
									this.handleClick(updateCom, item);
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
														{_item.text}
													</Item>
												);
											})}
										</SubMenu>
									);
								})}
							</Menu>
						);
					}}
				</Context.Consumer>
			</section>
		);
	}

	handleClick = (updateCom, item) => {
		const {
			item: {
				props: { label }
			}
		} = item;
		updateCom(label);
	};
}
