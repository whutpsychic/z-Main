import path from './path.js';

//*******************************************//
//
//【注】
//	1.此文件为功能性初始化配置文件
//
//
//
//
//*******************************************//

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
var configData = {};

//语言切换
configData.__LeftTopLanguages__ = [
	{ text: '简体中文', type: 'Chinese' },
	{ text: 'English', type: 'English' }
];

//当前语言
configData.language = "Chinese";

//当前目录位置
configData.currentPosition = getcurrPosition('1-1');

//当前contents一页最多显示几条
configData.maxNum = 12;



export default configData;