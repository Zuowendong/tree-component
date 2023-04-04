import { ref as i, createVNode as e, defineComponent as d, createTextVNode as u } from "vue";
const h = {
  data: {
    type: Array,
    required: !0
  }
};
function g(n) {
  const t = (l) => l.reduce(
    (p, c) => c.open ? p.concat(c, t(c.children)) : p.concat(c),
    []
  );
  let o = i(t(n));
  return {
    openedData: o,
    toggle: (l) => {
      l.children && (l.open = !l.open, o.value = t(n));
    }
  };
}
const v = () => e("svg", {
  t: "1680490522240",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1576",
  width: "16",
  height: "16"
}, [e("path", {
  d: "M815.2 911.7H210.8c-55.4 0-100.7-45.3-100.7-100.7V206.5c0-55.4 45.3-100.7 100.7-100.7h604.5c55.4 0 100.7 45.3 100.7 100.7V811c0 55.3-45.3 100.7-100.8 100.7zM210.8 156.1c-30.2 0-50.4 20.1-50.4 50.4V811c0 30.2 20.1 50.4 50.4 50.4h604.5c30.2 0 50.4-20.1 50.4-50.4V206.5c0-30.2-20.1-50.4-50.4-50.4H210.8z m0 0",
  "p-id": "1577"
}, null), e("path", {
  d: "M714.5 533.9h-403c-15.1 0-25.2-10.1-25.2-25.2s10.1-25.2 25.2-25.2h403c15.1 0 25.2 10.1 25.2 25.2s-10.1 25.2-25.2 25.2z m0 0",
  "p-id": "1578"
}, null), e("path", {
  d: "M513 735.4c-15.1 0-25.2-10.1-25.2-25.2v-403c0-15.1 10.1-25.2 25.2-25.2s25.2 10.1 25.2 25.2v403c0 15.1-10.1 25.2-25.2 25.2z m0 0",
  "p-id": "1579"
}, null)]), x = () => e("svg", {
  t: "1680490680625",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1780",
  width: "16",
  height: "16"
}, [e("path", {
  d: "M815.2 911.7H210.8c-55.4 0-100.7-45.3-100.7-100.7V206.5c0-55.4 45.3-100.7 100.7-100.7h604.5c55.4 0 100.7 45.3 100.7 100.7V811c0 55.3-45.3 100.7-100.8 100.7zM210.8 156.1c-30.2 0-50.4 20.1-50.4 50.4V811c0 30.2 20.1 50.4 50.4 50.4h604.5c30.2 0 50.4-20.1 50.4-50.4V206.5c0-30.2-20.1-50.4-50.4-50.4H210.8z m0 0",
  "p-id": "1781"
}, null), e("path", {
  d: "M714.5 533.9h-403c-15.1 0-25.2-10.1-25.2-25.2s10.1-25.2 25.2-25.2h403c15.1 0 25.2 10.1 25.2 25.2s-10.1 25.2-25.2 25.2z m0 0",
  "p-id": "1782"
}, null)]), w = () => e("span", {
  style: "display: inline-block; width: 16px;"
}, null), f = (n, t) => e("div", {
  style: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 16 * (n.level - 1) + "px"
  },
  onClick: () => t(n)
}, [n.children ? n.open ? e(v, null, null) : e(x, null, null) : e(w, null, null), n.label]), s = /* @__PURE__ */ d({
  name: "WdTree",
  props: h,
  emits: [],
  setup(n, t) {
    const {
      openedData: o,
      toggle: a
    } = g(n.data);
    return () => e("div", {
      class: "d-tree"
    }, [o.value.map((l) => f(l, a))]);
  }
});
s.install = function(n) {
  n.component(s.name, s);
};
const m = {
  title: "Tree 树",
  category: "数据展示",
  install(n) {
    n.use(s);
  }
}, V = {
  data: {
    type: String
  }
}, r = /* @__PURE__ */ d({
  name: "WdButton",
  props: V,
  emits: [],
  setup(n, t) {
    return () => e("button", {
      class: "d-tree"
    }, [u("xxx")]);
  }
});
r.install = function(n) {
  n.component(r.name, r);
};
const y = {
  title: "Button 按钮",
  category: "数据展示",
  install(n) {
    n.use(r);
  }
}, z = [m, y], T = {
  install(n) {
    z.forEach((t) => n.use(t));
  }
};
export {
  r as Button,
  s as Tree,
  T as default
};
