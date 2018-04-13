import actionTypes from './actionTypes.js';
import configData from '../../data/configData.js';

//翻译reducer
const translateTo = (state = configData.language, action) => {

	switch (action.type) {

		case actionTypes.TRANSLATE_TO_CHINESE: return action.language;
		case actionTypes.TRANSLATE_TO_ENGLISH: return action.language;
		default: return state;
  }

};








export { translateTo };