
//setValue
export const setValue = (obj) => {
	//setValue
	var startValue = 0;
	/*****辅助函数*****/
	const _setValue = () => {
		if (typeof startValue !== 'number') { alert('This Value is supposed to be a number.'); return; };
		startValue = startValue + 1;
		return startValue.toString();
	}

	/*****辅助函数*****/
	for (let i in obj) {
		obj[i].value = _setValue();
	}
}
