
//目录内容
const menuCN = [
  {
    text: '随谈杂想', value: '1',
    children: [
			{ text: '所闻所感', value: '1-1' },
      { text: '阅历经验', value: '1-2' },
			{ text: '感悟人生', value: '1-3' },
			{ text: '见异思迁', value: '1-4' }
    ]
  },
  {
    text: '即兴填词', value: '2',
    children: [
      { text: '经典歌词', value: '2-1' },
      { text: '文采高论', value: '2-2' },
      { text: '时代新语', value: '2-3' },
      { text: '改编整合', value: '2-4' },
      { text: '原    创', value: '2-5' }
		]
  },
  {
    text: '我的书库', value: '3',
    children: [
      { text: '国内名著', value: '3-1' },
      { text: '国外名著', value: '3-2' },
      { text: '技术学习', value: '3-3' },
      { text: '小说散文', value: '3-4' }
    ]
	},
	{
		text: '学习笔记', value: '4',
		children: [
			{ text: '技术学习', value: '4-1' },
			{ text: '问题解决', value: '4-2' },
      { text: '经验教训', value: '4-3' },
      { text: '词    典', value: '4-4' }
		]
	},
	{
		text: '影视评论', value: '5',
		children: [
			{ text: '经典补课', value: '5-1' },
			{ text: '时令新片', value: '5-2' },
			{ text: '名作大赏', value: '5-3' },
			{ text: '标新立异', value: '5-4' }
		]
	},
	{
		text: '脑洞百科', value: '6',
		children: [
			{ text: '名词解释', value: '6-1' },
			{ text: '事实常识', value: '6-2' }
		]
	}
];


export default menuCN;

/************辅助函数群*************/