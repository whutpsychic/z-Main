import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { TopBar } from './views';
import { Clock } from './views';
import { Menu } from './views';
import { TopIcon } from './views';
import { QueryBar } from './views';
import { BottomBar } from './views';

import Routes from './Routes.js';

import { Page } from './common';

class App extends Component {

	render() {

    return (
      <div className="App">
				<TopBar />
				<div className="top-clock">
					<Clock />
				</div>
				<div className="main-container">
					<div className="main-left-menu">
						<TopIcon />
						<div className="behind-bars">
							<Menu />
						</div>
					</div>
					<div className="main-right-contents">
						<QueryBar />
						<Routes />
					</div>
				</div>
				<BottomBar />

				<Page />

      </div>
    );
  }
}

const mapStateToProps = (state) => {

	return {
		position: state.menuPosition
	}
}



export default connect(mapStateToProps)(App);
