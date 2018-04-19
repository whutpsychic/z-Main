
import actionTypes from './actionTypes.js';

//变换文章内容的reducer
export const changeContentReducer = (state = [], action) => {

	switch (action.type){

		case actionTypes.LOAD_CONTENT: return action.content;
		default: return state;
	}
};

//变换Pager的显示type
export const changePagertypeReducer = (state = "article", action) => {

	switch (action.type) {

		case actionTypes.CHANGE_PAGER_TYPE: return action.pagerType;
		default: return state;
	}
};

//显示Pager
export const showPagerReducer = (state = false, action) => {

	switch (action.type) {

		case actionTypes.SHOW_PAGER: return action.show;
		default: return state;
	}
};