const fs = require("fs");

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
