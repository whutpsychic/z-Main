
import { createStore, combineReducers } from 'redux';
import { changeContentReducer, changePagertypeReducer, showPagerReducer, changeWordReducer} from './reducer';

var _reducers = combineReducers({
	content: changeContentReducer,
	showpager: showPagerReducer,
	pagetype: changePagertypeReducer,
	currwords: changeWordReducer
})

var _store_ = createStore(_reducers);

export default _store_;