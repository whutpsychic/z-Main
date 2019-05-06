// //浅比较
// // 一个数组中是否有某项目
// Array.prototype.has = function(item) {

// 	const arr = this;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === item) return true;
// 	}

// 	return false;
// };

// //将一个项目从数组中剔除
// Array.prototype.kickoff = function(item) {
// 	const arr = this;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (item === arr[i]) {
// 			arr.splice(i, 1);
// 			return arr;
// 		}
// 	}

// 	return arr;
// };

// ******************************************************************
// 以上是直接修改原型(适配IE等旧时代浏览器)
// ******************************************************************

let ArrayProxy = new Proxy(Array.prototype, {
	set(trapTarget, key, value) {
		//如果原型中已存在方法
		if (trapTarget.hasOwnProperty(key)) {
			throw new Error("您扩展的数组方法已存在");
		} else {
			if (typeof value === "function") {
				return Reflect.set(trapTarget, key, value);
			}
			throw new Error("您扩展的数组属性不是一个方法");
		}
	}
});

//浅比较
// 一个数组中是否有某项目
ArrayProxy.has = function(item) {
	const arr = this;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) return true;
	}

	return false;
};

//将一个项目从数组中剔除
ArrayProxy.kickoff = function(item) {
	const arr = this;

	for (let i = 0; i < arr.length; i++) {
		if (item === arr[i]) {
			arr.splice(i, 1);
			return arr;
		}
	}

	return arr;
};
