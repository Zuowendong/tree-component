import { defineComponent } from "vue";
import { treeProps, type TreeProps } from "./tree-types";
import IconOpen from "../assets/open.svg";

export default defineComponent({
	name: "WdTree",
	props: treeProps,
	emits: [],
	setup(props: TreeProps, ctx) {
		// 缩进组件
		const Indent = () => <span style="display: inline-block; width: 16px;"></span>;

		const renderNode = (item: any) => (
			<div style={{ paddingLeft: 16 * (item.level - 1) + "px" }}>
				{item.children ? <IconOpen /> : <Indent />}
				{item.label}
			</div>
		);
		const renderTree = (treeData: any) => {
			return treeData.map((item: any) => {
				if (item.children) {
					return (
						<>
							{renderNode(item)}
							{renderTree(item.children)}
						</>
					);
				}
				return renderNode(item);
			});
		};

		return () => <div class="d-tree">{renderTree(props.data)}</div>;
	},
});
