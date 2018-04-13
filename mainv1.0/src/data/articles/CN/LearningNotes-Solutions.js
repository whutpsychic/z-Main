import { setValue } from '../../helper.js';

var LearningNotesSolutionsCN = {};

LearningNotesSolutionsCN.name1 = {

	text: '【疑难杂症】win10系统笔记本连接不上显示器', value: '001', time: 20180404, timer: 1130, letter: 'w',
	title: 'Win10系统笔记本连接不上显示器',
	article: [
		'可能原因：',
		'1.系统更新后致使显示驱动程序丢失或初始化。',
		'2.系统长时间使用突然抽风。',
		'解决方案：',
		'1.设置=> 显示设置 => 高级 => 显示适配器属性 => 属性 => 驱动程序 => 更新驱动 => 重启计算机。',
		'2.直接到 windows 检查更新里面检查更新=> 重启计算机。',
		'3.如以上操作进行完毕之后仍不起作用，请关闭计算机，隔一段时间然后开启计算机（此操作不等于重启）。'
	]
};

setValue(LearningNotesSolutionsCN);
export default LearningNotesSolutionsCN;