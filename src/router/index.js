import { looseIndexOf } from "@vue/shared";
import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
const routes = [
  { path: "/", component: () => import("../views/home.vue") },
  {
    path: "/xuehua",
    name: "xuehua",
    meta: { loading: true },
    component: () => import("../views/xuehua.vue"),
  },
  {
    path: "/lifang",
    name: "lifang",
    meta: { loading: true },
    component: () => import("../views/lifang.vue"),
  },
  {
    path: "/scrollpage",
    name: "scrollpage",
    meta: { loading: true },
    component: () => import("../views/scrollpage.vue"),
  },
  {
    path: "/playgame",
    name: "playgame",
    meta: { loading: true },
    component: () => import("../views/playgame.vue"),
  },
  {
    path: "/threehome",
    name: "threehome",
    meta: { loading: true },
    component: () => import("../views/threehome.vue"),
  },
  {
    path: "/product",
    name: "product",
    meta: { loading: true },
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/product2",
    name: "product2",
    meta: { loading: true },
    component: () => import("../views/Product2.vue"),
  },
  {
    path: "/scene",
    name: "scene",
    meta: { loading: true },
    component: () => import("../views/Scene.vue"),
  },
  {
    path: "/eangEdit",
    name: "eangEdit",
    meta: { loading: true },
    component: () => import("../views/eangEdit.vue"),
  },
  {
    path: "/morecode",
    name: "morecode",
    meta: { loading: true },
    component: () => import("../views/morecode.vue"),
  },
];


const IsLoading = []

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({

  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
router.beforeEach((to, from, next) => {
  // console.log(to.name)
  if (to.meta && to.meta.loading && IsLoading.indexOf(to.name) == -1) {
    IsLoading.push(to.name)
    store.commit('setshowloading', true)
  }
  next()
})

router.afterEach((to, from) => {
  store.commit('setshowloading', false)
})
export default router;


