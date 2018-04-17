import { createStore, combineReducers } from 'redux';

import { translateReducer } from './views/TopBar';
import { changeMenuReducer } from './views/Menu';


var reducers = combineReducers({
	language: translateReducer,
	menuPosition: changeMenuReducer
});

export default createStore(reducers, {});
