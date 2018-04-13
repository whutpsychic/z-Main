import * as actionTypes from './actionTypes.js';

//改变文章内容reducer
export const changeArticleReducer = (state = { article: []}, action) => {

	switch (action.type) {

		case actionTypes.CHANGE_ARTICLE: return action.article;
		default: return state;
	}
}

//是否显示Page reducer
export const showPageReducer = (state = false, action) => {

	switch (action.type) {

		case actionTypes.SHOW_PAGE: return action.showpage;
		default: return state;
	}
}

//改变当前Page type的reducer
export const setPageTypeReducer = (state = "", action) => {

	switch (action.type) {

		case actionTypes.SET_PAGE_TYPE: return action.pagetype;
		default: return state;
	}
}

