import React from "react";
import { DB_TopMenu } from "../../db";
import "./style.css";

import logo from "./antd-logo.svg";

import { Menu, Icon } from "antd";

export default class extends React.Component {
	render() {
		return (
			<header className="main-header">
				<div className="left-top-logo">
					<img alt="logo" src={logo} />
					<span>Ant-Design</span>
				</div>
				<div className="right-top-menu">
					<Menu mode="horizontal">
						{DB_TopMenu.map((item, index) => {
							return (
								<Menu.Item key={item.id}>
									<a href={item.link}>
										<Icon type={item.icon} />
										{item.text}
									</a>
								</Menu.Item>
							);
						})}
					</Menu>
				</div>
			</header>
		);
	}
}
