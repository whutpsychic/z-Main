
import * as actionTypes from './actions.js';

import { configData } from '../../data';


//翻译reducer
export const translateReducer = (state = configData.currlanguage, action) => {

	switch (action.type) {

		case actionTypes.CHANGE_LANGUAGE: return action.language;
		default: return state;
	}

}




