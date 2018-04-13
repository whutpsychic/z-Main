import { createStore, combineReducers} from 'redux';
import configData from './data/configData.js';

//import reducers
import { translateTo } from './views/TopBar';
import { changeMenuReducer } from './views/Menu';
import { changeArticleReducer, showPageReducer, setPageTypeReducer} from './pages/reducer.js';

//根据 configData 配置 store
const getAllLanguages = () => {
	return configData.__LeftTopLanguages__;
}

const reducer = combineReducers({
	Languages:getAllLanguages,


	language: translateTo,
	menuPosition: changeMenuReducer,
	article: changeArticleReducer,

	showpage: showPageReducer,
	pagetype: setPageTypeReducer
});







export default createStore(reducer, {});