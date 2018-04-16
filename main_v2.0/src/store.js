import { createStore, combineReducers } from 'redux';

import { translateReducer } from './views/TopBar';


var reducers = combineReducers({
	language: translateReducer
});

export default createStore(reducers, {});
