
import { createStore, combineReducers } from 'redux';
import { changeContentReducer, changePagertypeReducer, showPagerReducer } from './reducer';

var _reducers = combineReducers({
	content: changeContentReducer,
	showpager: showPagerReducer,
	pagetype: changePagertypeReducer
})

var _store_ = createStore(_reducers);

export default _store_;