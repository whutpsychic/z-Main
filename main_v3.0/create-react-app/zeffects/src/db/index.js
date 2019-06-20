//leftmenu section
const m_3DScrolling = {
	key: "1-1",
	text: "3d 滚动",
	link: "3d-scrolling"
};

const m_3DRotaryDisplay = {
	key: "1-2",
	text: "3d 旋转展示",
	link: "3d-rotarydisplay"
};

const m_borderHightLight = {
	key: "2-1",
	text: "border 描边",
	link: "border-highlight"
};

const DB = {
	LeftMenu: [
		{
			key: 1,
			text: "3d系列",
			tag: "3d",
			children: [m_3DScrolling, m_3DRotaryDisplay]
		},
		{
			key: 2,
			text: "border",
			tag: "border",
			children: [m_borderHightLight]
		}
	]
};

export default DB;
