
import actionTypes from './actionTypes.js';

//变换文章内容action
export const changeContent = (content) => ({
	type: actionTypes.LOAD_CONTENT,
	content: content
})

//变换Pager的显示type
export const changePagertype = (type) => ({
	type: actionTypes.CHANGE_PAGER_TYPE,
	pagerType: type
})

//显示Pager
export const showPager = (show) => ({
	type: actionTypes.SHOW_PAGER,
	show: show
})
