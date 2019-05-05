//浅比较
//一个数组中是否有某项目
Array.prototype.has = function(item) {

	const arr = this;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) return true;
	}

	return false;
};

//将一个项目从数组中剔除
Array.prototype.kickoff = function(item) {
	const arr = this;

	for (let i = 0; i < arr.length; i++) {
		if (item === arr[i]) {
			arr.splice(i, 1);
			return arr;
		}
	}

	return arr;
};
