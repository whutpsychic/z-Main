
import actionTypes from './actionTypes.js';

//翻译动作
export const changeMenu = (position) => {

	if (!position.split('-')[1])
		position += "-1";

	return {
		type: actionTypes.CHANGE_MENU,
		position: position
	}

}


