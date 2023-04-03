import { defineComponent } from "vue";
import { treeProps, type TreeProps } from "./tree-types";
import IconOpen from "../assets/open.svg";
import IconClose from "../assets/close.svg";

export default defineComponent({
	name: "WdTree",
	props: treeProps,
	emits: [],
	setup(props: TreeProps, ctx) {
		const openedTree = (tree: any) => {
			return tree.reduce(
				(acc: any, item: any) => (item.open ? acc.concat(item, openedTree(item.children)) : acc.concat(item)),
				[]
			);
		};
		// 传入数据做拍平和过滤
		let openedData = openedTree(props.data);

		const toggle = (item: any) => {
			if (!item.children) return;
			item.open = !item.open;
			openedData = openedTree(props.data);
		};

		// 缩进组件
		const Indent = () => <span style="display: inline-block; width: 16px;"></span>;

		const renderNode = (item: any) => (
			<div style={{ paddingLeft: 16 * (item.level - 1) + "px" }} onClick={() => toggle(item)}>
				{item.children ? item.open ? <IconOpen /> : <IconClose /> : <Indent />}
				{item.label}
			</div>
		);
		const renderTree = (treeData: any) => {
			// return treeData.map((item: any) => {
			// 	if (item.children) {
			// 		return (
			// 			<>
			// 				{renderNode(item)}
			// 				{renderTree(item.children)}
			// 			</>
			// 		);
			// 	}
			// 	return renderNode(item);
			// });

			return treeData.map((item: any) => renderNode(item));
		};

		return () => <div class="d-tree">{renderTree(openedData)}</div>;
	},
});
