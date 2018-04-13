import actionTypes from './actionTypes.js';
import configData from '../../data/configData.js';

export const changeMenuReducer = (state = configData.currentPosition, action) => {

	switch (action.type) {

		case actionTypes.CHANGE_MENU: return action.position;
		default: return state;
	}
}

