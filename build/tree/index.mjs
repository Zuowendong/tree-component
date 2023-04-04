import { ref as r, createVNode as n, defineComponent as a } from "vue";
const i = {
  data: {
    type: Array,
    required: !0
  }
};
function u(e) {
  const t = (l) => l.reduce(
    (p, o) => o.open ? p.concat(o, t(o.children)) : p.concat(o),
    []
  );
  let c = r(t(e));
  return {
    openedData: c,
    toggle: (l) => {
      l.children && (l.open = !l.open, c.value = t(e));
    }
  };
}
const h = () => n("svg", {
  t: "1680490522240",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1576",
  width: "16",
  height: "16"
}, [n("path", {
  d: "M815.2 911.7H210.8c-55.4 0-100.7-45.3-100.7-100.7V206.5c0-55.4 45.3-100.7 100.7-100.7h604.5c55.4 0 100.7 45.3 100.7 100.7V811c0 55.3-45.3 100.7-100.8 100.7zM210.8 156.1c-30.2 0-50.4 20.1-50.4 50.4V811c0 30.2 20.1 50.4 50.4 50.4h604.5c30.2 0 50.4-20.1 50.4-50.4V206.5c0-30.2-20.1-50.4-50.4-50.4H210.8z m0 0",
  "p-id": "1577"
}, null), n("path", {
  d: "M714.5 533.9h-403c-15.1 0-25.2-10.1-25.2-25.2s10.1-25.2 25.2-25.2h403c15.1 0 25.2 10.1 25.2 25.2s-10.1 25.2-25.2 25.2z m0 0",
  "p-id": "1578"
}, null), n("path", {
  d: "M513 735.4c-15.1 0-25.2-10.1-25.2-25.2v-403c0-15.1 10.1-25.2 25.2-25.2s25.2 10.1 25.2 25.2v403c0 15.1-10.1 25.2-25.2 25.2z m0 0",
  "p-id": "1579"
}, null)]), g = () => n("svg", {
  t: "1680490680625",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1780",
  width: "16",
  height: "16"
}, [n("path", {
  d: "M815.2 911.7H210.8c-55.4 0-100.7-45.3-100.7-100.7V206.5c0-55.4 45.3-100.7 100.7-100.7h604.5c55.4 0 100.7 45.3 100.7 100.7V811c0 55.3-45.3 100.7-100.8 100.7zM210.8 156.1c-30.2 0-50.4 20.1-50.4 50.4V811c0 30.2 20.1 50.4 50.4 50.4h604.5c30.2 0 50.4-20.1 50.4-50.4V206.5c0-30.2-20.1-50.4-50.4-50.4H210.8z m0 0",
  "p-id": "1781"
}, null), n("path", {
  d: "M714.5 533.9h-403c-15.1 0-25.2-10.1-25.2-25.2s10.1-25.2 25.2-25.2h403c15.1 0 25.2 10.1 25.2 25.2s-10.1 25.2-25.2 25.2z m0 0",
  "p-id": "1782"
}, null)]), v = () => n("span", {
  style: "display: inline-block; width: 16px;"
}, null), w = (e, t) => n("div", {
  style: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 16 * (e.level - 1) + "px"
  },
  onClick: () => t(e)
}, [e.children ? e.open ? n(h, null, null) : n(g, null, null) : n(v, null, null), e.label]), s = /* @__PURE__ */ a({
  name: "WdTree",
  props: i,
  emits: [],
  setup(e, t) {
    const {
      openedData: c,
      toggle: d
    } = u(e.data);
    return () => n("div", {
      class: "d-tree"
    }, [c.value.map((l) => w(l, d))]);
  }
});
s.install = function(e) {
  e.component(s.name, s);
};
const f = {
  title: "Tree 树",
  category: "数据展示",
  install(e) {
    e.use(s);
  }
};
export {
  s as Tree,
  f as default
};
