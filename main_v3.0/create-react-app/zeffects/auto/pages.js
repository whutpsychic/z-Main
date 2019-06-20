// ***************
// *运行 npm run pages 以写入pages.js
// *
// ***************

const fs = require("fs");

//***************************
// 根据 db 来确定如果存在则跳过，如果不存在则初始化一个空的文件夹（内含最简单文件）

const getindexjstemplate = str =>
	`import React from "react";
import "./style.css";

export default class extends React.Component {
	render() {
		return <h1>` +
	str +
	`</h1>;
	}
}`;

// 读取components文件夹内的所有文件夹

//从 db 读取数据并处理
const fromdb = fs.readFile("./src/db/index.js", [], (how, data) => {
	//转字符串
	const dataStr = data.toString("utf-8");
	//提取link:"xxxx"
	const linkarr = dataStr.match(/link:\s*"\w*-\w*"/g);
	//提取link 后面的字符串
	const _arr = linkarr.map(item => {
		item = item.replace(/link:\s*/, "");
		item = item.replace(/"/g, "");
		return item;
	});

	//从components文件夹读取
	const components = fs.readdirSync("./src/components", []);

	_arr.forEach(item => {
		let found = false;
		for (let i of components) {
			if (i === item) {
				found = true;
				break;
			}
		}

		if (found) return;

		console.log("正在创建组件目录： " + item + "......");
		//创建动作
		const _path = "./src/components/" + item;
		fs.mkdir(_path, [], () => {
			fs.writeFile(
				_path + "/index.js",
				getindexjstemplate(item),
				["utf8"],
				() => {}
			);
			fs.writeFile(_path + "/style.css", "", ["utf8"], () => {});
			console.log("已成功创建" + item);
		});
	});
});

// *************************
//配置组
const fileUrl = "./src/pages.js";
const componentsDir = "./src/components";

//删除'src/pages.js'文件

if (fs.existsSync(fileUrl)) {
	fs.unlink(fileUrl, err => {
		console.log(err);
		if (!err) console.log("已成功删除旧的page.js!");
	});
} else {
	console.log("没有找到 pages.js 文件，正在准备创建 page.js ...");
}

// ****

//遍历'src/components'目录下的所有文件夹
fs.readdir(componentsDir, {}, (err, data) => {
	console.log(data);
	const routeName = data;

	const _importStr = data
		.map((item, i) => {
			return "import M" + i + " from './components/" + data[i] + "';";
		})
		.join("\n");

	const pagesBody = data.map((item, i) => {
		return {
			path: `/${item}`,
			component: `M${i}`
		};
	});

	const _definePages = `const pages=${JSON.stringify(pagesBody)}\n`;
	const _exportPages = `export default pages;`;

	fs.writeFile(
		fileUrl,
		[_importStr, _definePages, _exportPages]
			.join("\n")
			.replace(/":"M/g, '":M')
			.replace(/"}/g, "}"),
		[],
		err => {
			if (err) console.log(err);
			console.log("成功创建pages.js");
		}
	);
});
//创建数组
//对于每个文件夹
//读取文件夹名
//根据文件夹名创建引入名(这个名称其实比较无所谓)
//创建一个对象
//{path:文件夹名,component:引入名}
//export default const pages;
// *****

//创建文件'src/pages.js'
//并写入以上内容
