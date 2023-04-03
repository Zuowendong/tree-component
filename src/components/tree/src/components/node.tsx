import IconOpen from "../assets/open.svg";
import IconClose from "../assets/close.svg";
import Indent from "./Indent";

const renderNode = (item: any, toggle: any) => (
	<div style={{ paddingLeft: 16 * (item.level - 1) + "px" }} onClick={() => toggle(item)}>
		{item.children ? item.open ? <IconOpen /> : <IconClose /> : <Indent />}
		{item.label}
	</div>
);

export default renderNode;
