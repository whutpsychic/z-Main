
import actionTypes from './actionTypes.js';

import { configData } from '../../data';

//改变菜单reducer
export const changeMenuReducer = (state = configData.currMenu, action) => {

	switch (action.type) {

		case actionTypes.CHANGE_MENU: return action.position;
		default: return state;
	}

}




