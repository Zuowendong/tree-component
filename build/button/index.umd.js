(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={},e.Vue))})(this,function(e,t){"use strict";const i={data:{type:String}},n=t.defineComponent({name:"WdButton",props:i,emits:[],setup(o,s){return()=>t.createVNode("button",{class:"d-tree"},[t.createTextVNode("xxx")])}});n.install=function(o){o.component(n.name,n)};const u={title:"Button 按钮",category:"数据展示",install(o){o.use(n)}};e.Button=n,e.default=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});