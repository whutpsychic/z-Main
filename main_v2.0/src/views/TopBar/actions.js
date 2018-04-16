
import actionTypes from './actionTypes.js';

//翻译动作
export const translate = (lang) => ({
	type: actionTypes.CHANGE_LANGUAGE,
	language: lang
})


