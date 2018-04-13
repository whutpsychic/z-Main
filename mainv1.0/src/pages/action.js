import * as actionTypes from './actionTypes.js';

export const changeArticle = (article) => ({
	type: actionTypes.CHANGE_ARTICLE,
	article: article
})

export const showPage = (ifshow) => ({
	type: actionTypes.SHOW_PAGE,
	showpage: ifshow
})

export const setPageType = (type) => ({
	type: actionTypes.SET_PAGE_TYPE,
	pagetype: type
})

