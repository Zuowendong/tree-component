import { defineComponent as n, createVNode as o, createTextVNode as s } from "vue";
const r = {
  data: {
    type: String
  }
}, e = /* @__PURE__ */ n({
  name: "WdButton",
  props: r,
  emits: [],
  setup(t, a) {
    return () => o("button", {
      class: "d-tree"
    }, [s("xxx")]);
  }
});
e.install = function(t) {
  t.component(e.name, e);
};
const c = {
  title: "Button 按钮",
  category: "数据展示",
  install(t) {
    t.use(e);
  }
};
export {
  e as Button,
  c as default
};
