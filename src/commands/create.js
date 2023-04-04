import inquirer from "inquirer";
import { red } from "kolorist";

const CREATE_TYPES = ["component", "lib-entry"];
const DOCS_CATEGORIES = ["通用", "导航", "反馈", "数据录入", "数据展示", "布局"];

export async function onCreate(cmd = {}) {
	let { type } = cmd;

	if (!type) {
		const result = await inquirer.prompt([
			{
				name: "type",
				type: "list",
				message: "（必填）请选择创建类型：",
				choices: CREATE_TYPES,
				default: 0,
			},
		]);
		type = result.type;
	}

	if (CREATE_TYPES.every((t) => type !== t)) {
		console.log(red(`当前类型仅支持： ${CREATE_TYPES.join(",")}，收到不在支持范围内的 "${type}"，请重新选择！`));
		return onCreate();
	}
}
