import path from './path.js';
/****************辅助函数***************/

const getcurrPosition = (initValue) => {

	let _curr = window.location.hash;

	//获取当前path
	let _position1 = _curr.split('/')[1];
	let _position2 = _curr.split('/')[2];
	let _position = _position1 + '/' + _position2;

	for (let i = 0; i < path.length; i++) {
		if (_position === path[i].position) {
			return path[i].value;
		}
	}

	return initValue;
}
/****************辅助函数***************/

var configData = {

	//通用Data组
	__Languages__: [
		{ text: '简体中文', value: 'Chinese' },
		{ text: 'English', value: 'English' }
	],



	//设置Data组
	currlanguage: "Chinese",

	currMenu: getcurrPosition('1-1'),

	//设置性数据配置
	//table一页最多会有多少条显示
	maxnum: 3

};

export default configData;