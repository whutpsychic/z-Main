
import actionTypes from './actionTypes.js';

//变换文章内容的reducer
export const changeContentReducer = (state = { content: []}, action) => {

	switch (action.type){

		case actionTypes.LOAD_CONTENT: return action.content;
		default: return state;
	}
};

//变换Pager的显示type的reducer
export const changePagertypeReducer = (state = "word", action) => {

	switch (action.type) {

		case actionTypes.CHANGE_PAGER_TYPE: return action.pagerType;
		default: return state;
	}
};

//显示Pager的reducer
export const showPagerReducer = (state = false, action) => {

	switch (action.type) {

		case actionTypes.SHOW_PAGER: return action.show;
		default: return state;
	}
};

//变换value的reducer
export const changeWordReducer = (state = "", action) => {

	switch (action.type) {

		case actionTypes.CHANGE_WORD: return action.word;
		default: return state;
	}
}



