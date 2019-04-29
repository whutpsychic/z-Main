import React from "react";
import "./style.css";
import Context from "../../context";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import pages from "../../pages";

export default class extends React.Component {
	render() {
		return (
			<div className="right-content">
				<Switch>
					{(() => {
						const arr = pages.map((item, i) => {
							return (
								<Route
									key={item.path}
									path={item.path}
									component={item.component}
								/>
							);
						});
						arr.push(<Redirect to={pages[0].path} />);
						return arr;
					})()}
				</Switch>
			</div>
		);
	}
}
