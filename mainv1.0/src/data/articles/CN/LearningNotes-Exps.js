import { setValue } from '../../helper.js';

var LearningNotesExpsCN = {};

LearningNotesExpsCN.name1 = {

	text: '【React】心得体会', value: '001', time: 20180404, timer: 1024, letter: 'x',
	title: '本站开发心得体会',
	article: [
		'1.越是底层的组件就越是应该傻瓜化',
		'2.代码结构分层次应该是一层只负责显示,然后他的上一层只负责事件处理。',
		'3.不动数据应该由最上层统一发放',
		'4.数据结构分配置型数据、显示性数据（主数据）、属性数据，属性数据应该和主数据放在一起，配置型数据应该单独放置。',
		'5. Provider 与 connect 联合使用,可使深层的傻瓜组件得以轻易地访问全局的 store',
		'6. mapStateToProps 的作用：千里取 store 里面的全局状态',
		'7. mapDispatchToProps 的作用:内部调用 action/reducer 并更新 store'
	]
};


setValue(LearningNotesExpsCN);

export default LearningNotesExpsCN;